class Timer {
  constructor(time, end) {
    this.timeLeft = time;
    this.counter = end;
    this.compteur = (time - end);
    this.timerText = document.getElementById("timer");
  }
  start() {
    document.documentElement.style.overflow = 'visible';
    for (let i=0 ; i<elements.length ; i++) {
    elements[i].style.display = "none";
  }
    document.getElementById("signature").style.display = "none";
    document.getElementById("stationName").style.display = "inline-block";
    document.getElementById("resa_title").textContent = "Réservation";
    document.getElementById("cancel").style.display = "inline-block";
    document.getElementById("countdown").style.display = "inline-block";
    document.getElementById("cancel1").style.display = "inline-block";
    let sn_text = document.getElementById("station-name").innerHTML;
    let result_sn = sn_text.indexOf('Station') - 4;
    document.getElementById("info_countdown").textContent = "Vélo réservé à la station ";
    document.getElementById("stationName").innerHTML = document.getElementById("station-name").textContent.substring(0, result_sn);
    document.getElementById("resaBy").innerHTML = " par ";
    document.getElementById("resaName").innerHTML = document.getElementById("firstname").value + " " + document.getElementById("lastname").value.toUpperCase();
    this.timerText.innerHTML = convertSec(this.compteur);
    interval = setInterval(countDown, 1000);
    sessionStorage.setItem("station_booked", document.getElementById("stationName").innerHTML);
    sessionStorage.setItem("name_booked", document.getElementById("resaName").innerHTML);
  }
}