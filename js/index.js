function mapPreview() {
  var map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=ACFD57pfZ53N62uqhZ8K', // replace with correct map style
      center: [0, 0],
      zoom: 2
  });
}
