//Paramètres Diaporama
/*let slider = new Slider({
  pause: pause,
  slides: slides,
  controls: controls,
  next: next,
  previous: previous
}, {
  playing: true,
  timer: 5000
});
slider.listenEvents();*/
//Paramètres Map
let apiUrls = {
  baseUrl: "https://api.jcdecaux.com/vls/v1",
  queryStations: "/stations",
  parameters: "?contract=Lyon&apiKey=f36669e3f90d95760c75c2bc5bbaf9527f5489b1"
};
let map_call = new Map({
  element: "mapid",
  latitudeInit: "45.757900",
  longitudeInit: "4.831854",
  zoomInit: "13",
  urlApiInit: apiUrls.baseUrl + apiUrls.queryStations + apiUrls.parameters
});
//Traitement Map
map_call.showMap();
//Paramètres Canvas
let colorLine = "black";
let weightLine = 2;
//Canvas Signature
let obj = new CanvasObject(canvas, colorLine, weightLine);
obj.events();
//Paramètres Timer
let time = 1200;
let end = 0;
let chrono = new Timer(time, end);