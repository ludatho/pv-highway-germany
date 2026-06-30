const map = new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json",
  center: [10.45, 51.16],
  zoom: 5.35,
  pitch: 0,
  bearing: 0
});

map.addControl(new maplibregl.NavigationControl(), "top-right");

map.on("load", () => {
  map.addSource("germany-center", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Preview layer",
            suitability: "high"
          },
          geometry: {
            type: "Point",
            coordinates: [10.45, 51.16]
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "preview-point-glow",
    type: "circle",
    source: "germany-center",
    paint: {
      "circle-radius": 28,
      "circle-color": "#8d74ff",
      "circle-opacity": 0.18
    }
  });

  map.addLayer({
    id: "preview-point",
    type: "circle",
    source: "germany-center",
    paint: {
      "circle-radius": 8,
      "circle-color": "#ffffff",
      "circle-stroke-color": "#8d74ff",
      "circle-stroke-width": 4
    }
  });
});
