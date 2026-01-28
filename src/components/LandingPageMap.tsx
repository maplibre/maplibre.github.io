import { Map, AttributionControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { createEffect, onMount } from "solid-js";

export const LandingPageMap = (props: any) => {
  let map;
  onMount(() => {
    map = new Map({
      container: "home-map",
      style: "https://demotiles.maplibre.org/globe.json",
      center: [0, 0],
      zoom: 1,
      attributionControl: false,
    }).addControl(
      new AttributionControl({
        compact: true,
        customAttribution:
          '<a href="https://www.naturalearthdata.com/">Natural Earth</a>',
      }),
    );
  });

  createEffect(() => {
    const mapAnimation = [
      {
        lng: -0.08411085041984734,
        lat: 7.115464377381386,
        Zoom: 1.3295073440521066,
        Duration: 3000,
        Pause: 0,
        Rotation: 0,
        Pitch: 0,
      },
      {
        lng: 15.44385629163537,
        lat: 41.56277698075792,
        Zoom: 3.4916772106200415,
        Duration: 3000,
        Pause: 3000,
        Rotation: 0,
        Pitch: 0,
      },
      {
        lng: 5.388541216098361,
        lat: 45.57339756361293,
        Zoom: 2.15010124013107,
        Duration: 3000,
        Pause: 6000,
        Rotation: 0,
        Pitch: 0,
      },
      {
        lng: -0.08411085041984734,
        lat: 7.115464377381386,
        Zoom: 1.3295073440521066,
        Duration: 3000,
        Pause: 9000,
        Rotation: 0,
        Pitch: 0,
      },
    ];

    const lastPoint = mapAnimation[mapAnimation.length - 1];

    function playAnimation() {
      mapAnimation.forEach(function (item, _) {
        setTimeout(function () {
          map.flyTo({
            duration: item.Duration,
            center: [item.lng, item.lat],
            zoom: item.Zoom,
            bearing: item.Rotation,
            pitch: item.Pitch,
            essential: true,
          });
        }, item.Pause);
      });
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.onload = playAnimation;
      setInterval(playAnimation, lastPoint.Pause + lastPoint.Duration);
    }
  });

  return <div id="home-map"></div>;
};
