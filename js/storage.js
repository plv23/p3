// Conservation Nom et Prénom
if (typeof localStorage != 'undefined') {
  if ('lastname' in localStorage) {
    document.getElementById("lastname").value = localStorage.getItem('lastname');
  }
} else {
  alert("localStorage n'est pas supporté");
}
if (typeof localStorage != 'undefined') {
  if ('firstname' in localStorage) {
    document.getElementById("firstname").value = localStorage.getItem('firstname');
  }
} else {
  alert("localStorage n'est pas supporté");
}
// ************************ SessionStorage ***********************************
// Conservation Réservation
if (typeof sessionStorage != 'undefined') {
  if ('station_booked' in sessionStorage && 'name_booked' in sessionStorage && 'timer_booked' in sessionStorage) {
    //conservation mise en forme bloc de réservation et infos de réservation en cours
    document.getElementById("resa").style.display = "block";
    document.getElementById("resa_title").textContent = "Réservation";
    document.getElementById("countdown").style.display = "block";
    document.getElementById("info_countdown").style.display = "block";
    document.getElementById("info_countdown").textContent = "Vélo réservé à la station ";
    document.getElementById("stationName").style.display = "block";
    document.getElementById("stationName").innerHTML = sessionStorage.getItem("station_booked");
    document.getElementById("resaBy").style.display = "block";
    document.getElementById("resaBy").textContent = " par ";
    document.getElementById("resaName").style.display = "block";
    document.getElementById("resaName").innerHTML = sessionStorage.getItem("name_booked");
    document.getElementById("timer").style.display = "block";
    document.getElementById("timer").innerHTML = sessionStorage.getItem("timer_booked");
    document.getElementById("cancel").style.display = "inline-block";
    document.getElementById("cancel1").style.display = "inline-block";
    let unite = document.getElementById("timer").innerHTML.substr(16, 1) * 60; //unité
    let dizaine = document.getElementById("timer").innerHTML.substr(16, 2) * 60; //dizaine
    let unite_unite = document.getElementById("timer").innerHTML.substr(29, 1); //ex 1mn1s
    let unite_dizaine = document.getElementById("timer").innerHTML.substr(29, 2); //ex 1mn11s
    let dizaine_unite = document.getElementById("timer").innerHTML.substr(30, 1); //ex 11mn1s
    let dizaine_dizaine = document.getElementById("timer").innerHTML.substr(30, 2); //ex 11mn11s
    if ((document.getElementById("timer").innerHTML.substr(19, 1) == "m") && (document.getElementById("timer").innerHTML.substr(32, 1) == "s")) {
      time = Number(dizaine) + Number(dizaine_unite);
    } else if ((document.getElementById("timer").innerHTML.substr(19, 1) == "m") && (document.getElementById("timer").innerHTML.substr(33, 1) == "s")) {
      time = Number(dizaine) + Number(dizaine_dizaine);
    } else if ((document.getElementById("timer").innerHTML.substr(18, 1) == "m") && (document.getElementById("timer").innerHTML.substr(31, 1) == "s")) {
      time = Number(unite) + Number(unite_unite);
    } else if ((document.getElementById("timer").innerHTML.substr(18, 1) == "m") && (document.getElementById("timer").innerHTML.substr(32, 1) == "s")) {
      time = Number(unite) + Number(unite_dizaine);
    }
    setInterval(countDown, 1000);
  }
} else {
  alert("sessionStorage n'est pas supporté");
}