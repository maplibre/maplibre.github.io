import {
  Map,
  AttributionControl,
  NavigationControl,
  Marker,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { onMount } from "solid-js";

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export const CommunityMap = (props: any) => {
  onMount(() => {
    const map = new Map({
      container: "community-map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 0],
      zoom: 1,
      hash: true,
      attributionControl: false,
    }).addControl(
      new AttributionControl({
        compact: true,
        customAttribution:
          'MapLibre contributors. | <a href="https://github.com/maplibre/maplibre.github.io">Edit on GitHub.</a>',
      }),
    );

    map.addControl(new NavigationControl());

    const lngs = props.members.map((person) => person.latlon[1]);
    const lats = props.members.map((person) => person.latlon[0]);

    map.fitBounds(
      [
        [Math.min(...lngs), Math.min(...lats)],
        [Math.max(...lngs), Math.max(...lats)],
      ],
      { padding: 50 },
    );

    shuffle(JSON.parse(JSON.stringify(props.members))).map((person) => {
      const img = document.createElement("img");
      img.className = "marker";
      img.src = `/community/${person.github}.png`;

      const anchor = document.createElement("a");
      anchor.href = `https://github.com/${person.href}`;
      anchor.title = person.github;

      anchor.append(img);
      new Marker({ element: anchor })
        .setLngLat([person.latlon[1], person.latlon[0]])
        .addTo(map);
    });
  });

  return <div id="community-map"></div>;
};
