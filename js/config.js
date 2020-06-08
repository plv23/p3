let elements = document.getElementsByClassName("disp");
let interval = null;
const makeIcon = markerName => new L.Icon({
  iconUrl: `./img/marker_${markerName}.png`,
  shadowUrl: './img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
const icons = {
  green: makeIcon('green'),
  red: makeIcon('red'),
  orange: makeIcon('orange'),
};
//marker vert par défaut
let icon = icons.green;
//calque
let tileStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicGx2IiwiYSI6ImNrOGVzbWcxYTAwMnMzbG8wZDMxbTFkZjgifQ.n4VYsVC3zTbj2ZpQ68E6Aw'
});