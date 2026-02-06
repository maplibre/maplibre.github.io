import { onMount } from "solid-js";
import { shuffleList } from "../utils/shuffleList";

export const Team = (props: { team: any[] }) => {
  onMount(() => {
    shuffleList(".team-list");
  });

  return (
    <>
      <div class="text-center">
        <div class="container pb-5 pt-2">
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
    </>
  );
};
