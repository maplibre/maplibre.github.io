import { onMount } from "solid-js";
import { shuffleList } from "../utils/shuffleList";

export const BoardSection = (props: { board: any[] }) => {
  onMount(() => {
    shuffleList(".board-list");
  });

  return (
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
              height="150"
              class="rounded-circle mt-3 border border-white"
            />
            <h3 class="m-3">{member.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export const TeamSection = (props: { team: any[] }) => {
  onMount(() => {
    shuffleList(".team-list");
  });

  return (
    <div
      class="team-list justify-content-center"
      style="display:flex; gap: 20px; flex-wrap: wrap;"
    >
      {props.team.map((member) => (
        <div class="text-center person">
          <a href={`/about/${member.link}`}>
            <img
              src={member.avatar}
              width="150"
              height="150"
              class="rounded-circle mt-3 border border-white"
            />
            <h3 class="m-3">{member.name}</h3>
            {member.position}
          </a>
        </div>
      ))}
    </div>
  );
};
