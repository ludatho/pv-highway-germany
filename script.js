const map = new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json",
  center: [10.45, 51.16],
  zoom: 5.4
});

map.addControl(new maplibregl.NavigationControl(), "top-right");
