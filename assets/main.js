import {
  Map,
  AttributionControl,
  NavigationControl,
  TerrainControl,
  Marker,
} from "maplibre-gl";
import "bootstrap";

function communityMap(container, community) {
  const map = new Map({
    container,
    style: "https://demotiles.maplibre.org/style.json",
    center: [0, 0],
    zoom: 1,
    hash: true,
    attributionControl: false,
  }).addControl(
    new AttributionControl({
      compact: false,
      customAttribution:
        'OpenStreetMap contributors. | <a href="https://github.com/maplibre/maplibre.github.io">Edit on GitHub.</a>',
    })
  );

  map.addControl(new NavigationControl());

  const lngs = community.map((person) => person.latlon[1]);
  const lats = community.map((person) => person.latlon[0]);

  map.fitBounds(
    [
      [Math.min(...lngs), Math.min(...lats)],
      [Math.max(...lngs), Math.max(...lats)],
    ],
    { padding: 50 }
  );

  community.map((person) => {
    const img = document.createElement("img");
    img.className = "marker";
    img.src = person.url;

    const anchor = document.createElement("a");
    anchor.href = person.href;
    anchor.title = person.name;
    anchor.append(img);
    new Marker(anchor)
      .setLngLat([person.latlon[1], person.latlon[0]])
      .addTo(map);
  });
}

function mapPreview(container) {
  const map = new Map({
    container,
    style: "https://demotiles.maplibre.org/style.json",
    center: [0, 0],
    zoom: 1,
  });

  const mapAnimation = [
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
      Rotation: 0,
      Pitch: 0,
    },
    {
      lng: 5.388541216098361,
      lat: 45.57339756361293,
      Zoom: 6.15010124013107,
      Duration: 10000,
      Pause: 8000,
      Rotation: 0,
      Pitch: 0,
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

  (window.onload = playAnimation),
    setInterval(playAnimation, lastPoint.Pause + lastPoint.Duration);
}

function terrain3dMap(container) {
  const map = (window.map = new Map({
    container,
    zoom: 12,
    center: [11.39085, 47.27574],
    pitch: 52,
    hash: true,
    style: {
      version: 8,
      sources: {
        osm: {
          type: "raster",
          tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "&copy; OpenStreetMap Contributors",
          maxzoom: 19,
        },
        terrainSource: {
          type: "raster-dem",
          url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
          tileSize: 256,
        },
        hillshadeSource: {
          type: "raster-dem",
          url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
          tileSize: 256,
        },
      },
      layers: [
        {
          id: "osm",
          type: "raster",
          source: "osm",
        },
        {
          id: "hills",
          type: "hillshade",
          source: "hillshadeSource",
          layout: { visibility: "visible" },
          paint: { "hillshade-shadow-color": "#473B24" },
        },
      ],
      terrain: {
        source: "terrainSource",
        exaggeration: 1,
      },
    },
    maxZoom: 18,
    maxPitch: 85,
  }));

  map.addControl(
    new NavigationControl({
      visualizePitch: true,
      showZoom: true,
      showCompass: true,
    })
  );

  map.addControl(
    new TerrainControl({
      source: "terrainSource",
      exaggeration: 1,
    })
  );
}

window.communityMap = communityMap;
window.mapPreview = mapPreview;
window.terrain3dMap = terrain3dMap;
