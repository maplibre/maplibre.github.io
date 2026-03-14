export interface GitHubStats {
  stars: string;
  forks: string;
  commits: string;
  pullRequests: string;
}

const authHeaders: Record<string, string> = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {};

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${Math.floor(n / 1_000_000)}M+`;
  if (n >= 1_000) return `${Math.floor(n / 1_000)}K+`;
  return `${n}`;
}

/**
 * Returns the total item count for a paginated GitHub API endpoint.
 * Passing `per_page=1` means the Link header's `rel="last"` page number
 * equals the total count directly — only one HTTP request is ever made.
 */
async function countPaginatedResource(url: string): Promise<number> {
  const resp = await fetch(url, { headers: authHeaders });
  if (!resp.ok) throw new Error(`GitHub API ${resp.status}: ${url}`);
  const last = resp.headers
    .get("link")
    ?.match(/[?&]page=(\d+)[^>]*>;\s*rel="last"/)?.[1];
  if (last) {
    await resp.body?.cancel();
    return parseInt(last, 10);
  }
  return ((await resp.json()) as unknown[]).length;
}

export async function fetchRepoStats(
  owner: string,
  repo: string,
): Promise<GitHubStats> {
  try {
    const repoResp = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers: authHeaders },
    );
    if (!repoResp.ok)
      throw new Error(`GitHub API ${repoResp.status}: ${owner}/${repo}`);
    const repoInfo = (await repoResp.json()) as {
      stargazers_count: number;
      forks_count: number;
    };

    const [commitCount, prCount] = await Promise.all([
      countPaginatedResource(
        `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
      ),
      countPaginatedResource(
        `https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=1`,
      ),
    ]);

    return {
      stars: formatCount(repoInfo.stargazers_count),
      forks: formatCount(repoInfo.forks_count),
      commits: formatCount(commitCount),
      pullRequests: formatCount(prCount),
    };
  } catch (err) {
    console.error(`Failed to fetch GitHub stats for ${owner}/${repo}:`, err);
    return { stars: "—", forks: "—", commits: "—", pullRequests: "—" };
  }
}

interface GitHubSponsorNode {
  name: string | null;
  login: string;
}

interface GitHubSponsorsResponse {
  data?: {
    organization: {
      sponsors: {
        nodes: GitHubSponsorNode[];
        pageInfo: {
          endCursor: string | null;
          hasNextPage: boolean;
        };
      };
    };
  };
  errors?: { message: string }[];
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

/**
 * Fetches the list of public GitHub Sponsors for the given organization.
 * Returns only names; falls back to an empty array on any error or when
 * GITHUB_TOKEN is not configured.
 */
export async function fetchGitHubSponsors(
  org: string,
): Promise<{ name: string }[]> {
  if (!process.env.GITHUB_TOKEN) {
    console.warn("GITHUB_TOKEN not set; skipping GitHub Sponsors fetch.");
    return [];
  }

  try {
    const sponsors: { name: string }[] = [];
    let cursor: string | null = null;

    const query = `
      query($org: String!, $cursor: String) {
        organization(login: $org) {
          sponsors(first: 100, after: $cursor) {
            nodes {
              ... on User { name login }
              ... on Organization { name login }
            }
            pageInfo { endCursor hasNextPage }
          }
        }
      }
    `;

    do {
      const resp = await fetch(GITHUB_GRAPHQL_URL, {
        method: "POST",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { org, cursor } }),
      });

      if (!resp.ok) throw new Error(`GitHub GraphQL API ${resp.status}`);

      const data = (await resp.json()) as GitHubSponsorsResponse;

      if (data.errors?.length) {
        throw new Error(data.errors.map((e) => e.message).join("; "));
      }

      const { nodes, pageInfo } = data.data!.organization.sponsors;

      for (const node of nodes) {
        const name = node.name || node.login;
        if (name) sponsors.push({ name });
      }

      cursor = pageInfo.hasNextPage ? pageInfo.endCursor : null;
    } while (cursor);

    return sponsors;
  } catch (err) {
    console.error(`Failed to fetch GitHub Sponsors for ${org}:`, err);
    return [];
  }
}
