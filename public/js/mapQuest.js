function initMap() {
	L.mapquest.key = "JrrtXEFqufokr0QChSslHGtljN4FZxQd";

  var map = L.mapquest.map('map', {
    center: [32.878590, -117.235829],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.878590, -117.235829]).addTo(map);
}
