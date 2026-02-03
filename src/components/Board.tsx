import { onMount } from "solid-js";
import { shuffleList } from "../utils/shuffleList";

export const Board = (props: { board: any[] }) => {
  onMount(() => {
    shuffleList(".board-list");
  });

  return (
    <>
      <div class="text-center">
        <div class="container pb-3 px-2">
          <div
            class="board-list justify-content-center"
            style="display:flex; gap: 20px; flex-wrap: wrap;"
          >
            {props.board.map((member) => (
              <div class="text-center person">
                <a href={`/about/${member.link}`}>
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
          <a href="https://maplibre.org/about/governing-board">
            MapLibre Governing Board
          </a>. <br />
          They are elected by&nbsp;
          <a href="https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md">
            Voting Members
          </a>
          , a group who represents the broader community.
        </p>
      </div>
    </>
  );
};
