import { onMount } from "solid-js";
import { shuffleList } from "../utils/shuffleList";

export const BoardAndTeam = (props: { board: any[]; team: any[] }) => {
  onMount(() => {
    shuffleList(".board-list");
    shuffleList(".team-list");
  });

  return (
    <>
      <h1 class="text-center pt-3">Governing Board</h1>
      <div class="text-center">
        <div class="container pb-3 px-2">
          <div
            class="board-list justify-content-center"
            style="display:flex; gap: 20px; flex-wrap: wrap;"
          >
            {props.board.map((member) => (
              <div class="text-center person">
                <a href={`about/${member.link}`}>
                  <img
                    src={member.avatar}
                    width="150"
                    class="rounded-circle mt-3 border border-white"
                  />
                  <h3 class="m-3">{member.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
        <p class="text-center">
          In charge to steering the Organization is the&nbsp;
          <a href="https://maplibre.org/about/">
            MapLibre Governing Board
          </a>. <br />
          <p>
            <a
              href="https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md"
              >Voting Members</a
            > (max. 10% from a single organization) elect the Governing Board and
            vote on changes to the MapLibre Charter. New Voting Members are nominated
            by existing Voting Members for contributing to the community in a non-trivial
            way or donating funds to MapLibre.
          </p>
        </p>
        <div>
          <h1 class="text-center pt-4">Team</h1>

          <div class="container pb-5 pt-2">
            <div
              class="team-list justify-content-center"
              style="display:flex; gap: 20px; flex-wrap: wrap;"
            >
              {props.team.map((member) => (
                <div class="text-center person">
                  <a href={`about/${member.link}`}>
                    <img
                      src={member.avatar}
                      width="150"
                      class="rounded-circle mt-3 border border-white"
                    />
                    <h3 class="m-3">{member.name}</h3>
                    {member.position}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
