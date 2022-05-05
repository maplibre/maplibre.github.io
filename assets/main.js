import {
  Map,
  AttributionControl,
  NavigationControl,
  Marker,
} from "maplibre-gl";

function communityMap(community) {
  var map = new Map({
    container: "map",
    style: "https://demotiles.maplibre.org/style.json",
    center: [0, 0],
    zoom: 1,
    hash: true,
    attributionControl: false,
  }).addControl(
    new AttributionControl({
      compact: false,
      customAttribution:
        'OpenStreetMap contributors. | <a href="https://github.com/maplibre/community">Edit on GitHub.</a>',
    })
  );

  map.addControl(new NavigationControl());

  community.map((person) => {
    var el = document.createElement("a");
    el.className = "marker";
    el.style.backgroundImage = `url(${person.url})`;
    el.style.width = "50px";
    el.style.height = "50px";
    el.href = person.href;
    new Marker(el).setLngLat([person.latlon[1], person.latlon[0]]).addTo(map);
  });
}

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

window.communityMap = communityMap;
window.mapPreview = mapPreview;
