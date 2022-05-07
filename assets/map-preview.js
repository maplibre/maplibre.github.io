import { Map } from "maplibre-gl";
import "bootstrap";

function mapPreview() {
  var map = new Map({
    container: "map",
    style: "https://demotiles.maplibre.org/style.json",
    center: [0, 0],
    zoom: 1,
  });

  var mapAnimation = [
    {
      lng: -0.08411085041984734,
      lat: 7.115464377381386,
      Zoom: 1.3295073440521066,
      Duration: 0,
      Pause: 0,
      Rotation: 0,
      Pitch: 0,
    },
    {
      lng: 15.44385629163537,
      lat: 41.56277698075792,
      Zoom: 3.4916772106200415,
      Duration: 5000,
      Pause: 3000,
      Rotation: -52.8,
      Pitch: 29.5,
    },
    {
      lng: 5.388541216098361,
      lat: 45.57339756361293,
      Zoom: 6.15010124013107,
      Duration: 10000,
      Pause: 8000,
      Rotation: -12,
      Pitch: 41.5,
    },
    {
      lng: -0.08411085041984734,
      lat: 7.115464377381386,
      Zoom: 1.3295073440521066,
      Duration: 100000,
      Pause: 18000,
      Rotation: 0,
      Pitch: 0,
    },
  ];

  var lastPoint = mapAnimation[mapAnimation.length - 1];

  function playAnimation() {
    mapAnimation.forEach(function (item, index) {
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

  (window.onload = playAnimation),
    setInterval(playAnimation, lastPoint.Pause + lastPoint.Duration);
}

window.mapPreview = mapPreview;
