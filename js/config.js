let pause = document.getElementById("pause");
let next = document.getElementById("next");
let slides = document.querySelectorAll('#slides .slide');
let controls = document.querySelectorAll('.controls');
let previous = document.getElementById("previous");
let station_name = document.getElementById("station-name");
let resa_block = document.getElementById("resa_block");
let resa = document.getElementById("resa");
let station = document.getElementById("station");
let resa_button = document.getElementById("resa-button");
let signature = document.getElementById("signature");
let signature_block = document.getElementById('signature-block');
let btn = document.getElementById("btn");
let lastname = document.getElementById('lastname');
let firstname = document.getElementById('firstname');
let canvas = document.getElementById("canvas");
let btnclear = document.getElementById("btnClear");
let btnsignature = document.getElementById("btnSignature");
let timer = document.getElementById("timer");
let cancel_one = document.getElementById("cancel1");
let btn_one = document.getElementById("btn1");
let resa_title = document.getElementById("resa-title");
let cancel_two = document.getElementById("cancel");
let ctdn = document.getElementById("countdown");
let info_ctdn = document.getElementById("info_countdown");
let stationName = document.getElementById("stationName");
let resaBy = document.getElementById("resaBy");
let resaName = document.getElementById("resaName");
let status_elt = document.getElementById("status");
let resa_status = document.getElementById("resa_status");
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