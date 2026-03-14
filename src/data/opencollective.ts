export interface Donor {
  name: string;
}

interface OpenCollectiveMember {
  MemberId: number;
  createdAt: string;
  type: string;
  role: string;
  isActive: boolean;
  totalAmountDonated: number;
  currency: string;
  lastTransactionAt: string;
  lastTransactionAmount: number;
  profile: string;
  name: string;
}

/** Minimum total donation in USD to be listed as a donor (filters out small/prank donations) */
const MIN_DONATION_USD = 10;

const MAX_PAGES = 20;

async function fetchAllMembers(slug: string): Promise<OpenCollectiveMember[]> {
  const members: OpenCollectiveMember[] = [];
  const limit = 1000;
  let offset = 0;

  for (let page = 0; page < MAX_PAGES; page++) {
    const url = `https://opencollective.com/${slug}/members/all.json?limit=${limit}&offset=${offset}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`OpenCollective API ${resp.status}: ${url}`);
    const batch = (await resp.json()) as OpenCollectiveMember[];
    members.push(...batch);
    if (batch.length < limit) break;
    offset += limit;
  }

  return members;
}

/**
 * Fetches the list of individual donors for an OpenCollective collective,
 * filtered to those who donated more than MIN_DONATION_USD in total,
 * sorted by total amount donated (descending) then most recent transaction.
 */
export async function fetchDonors(slug: string): Promise<Donor[]> {
  try {
    const members = await fetchAllMembers(slug);

    return members
      .filter(
        (m) => m.role === "BACKER" && m.totalAmountDonated > MIN_DONATION_USD,
      )
      .sort((a, b) => {
        if (b.totalAmountDonated !== a.totalAmountDonated) {
          return b.totalAmountDonated - a.totalAmountDonated;
        }
        return (
          new Date(b.lastTransactionAt).getTime() -
          new Date(a.lastTransactionAt).getTime()
        );
      })
      .map((m) => ({ name: m.name }));
  } catch (err) {
    console.error(`Failed to fetch OpenCollective donors for ${slug}:`, err);
    return [];
  }
}
