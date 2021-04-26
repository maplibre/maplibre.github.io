function mapPreview() {
  var map = new maplibregl.Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=5OFGN6trAtt6Hj95bXjU', // replace with correct map style and key
      center: [0, 0],
      zoom: 2
  });
}
