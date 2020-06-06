// Conservation Nom et Prénom
if (typeof localStorage != 'undefined') {
  if ('lastname' in localStorage) {
    lastname.value = localStorage.getItem('lastname');
  }
} else {
  alert("localStorage n'est pas supporté");
}
if (typeof localStorage != 'undefined') {
  if ('firstname' in localStorage) {
    firstname.value = localStorage.getItem('firstname');
  }
} else {
  alert("localStorage n'est pas supporté");
}
// ************************ SessionStorage ***********************************
// Conservation Réservation
if (typeof sessionStorage != 'undefined') {
  if ('station_booked' in sessionStorage && 'name_booked' in sessionStorage && 'timer_booked' in sessionStorage) {
    //conservation mise en forme bloc de réservation et infos de réservation en cours
    resa.style.display = "block";
    resa_title.textContent = "Réservation";
    ctdn.style.display = "block";
    info_ctdn.style.display = "block";
    info_ctdn.textContent = "Vélo réservé à la station ";
    stationName.style.display = "block";
    stationName.innerHTML = sessionStorage.getItem("station_booked");
    resaBy.style.display = "block";
    resaBy.textContent = " par ";
    resaName.style.display = "block";
    resaName.innerHTML = sessionStorage.getItem("name_booked");
    timer.style.display = "block";
    timer.innerHTML = sessionStorage.getItem("timer_booked");
    cancel_two.style.display = "inline-block";
    cancel_one.style.display = "inline-block";
    let unite = timer.innerHTML.substr(16, 1) * 60; //unité
    let dizaine = timer.innerHTML.substr(16, 2) * 60; //dizaine
    let unite_unite = timer.innerHTML.substr(29, 1); //ex 1mn1s
    let unite_dizaine = timer.innerHTML.substr(29, 2); //ex 1mn11s
    let dizaine_unite = timer.innerHTML.substr(30, 1); //ex 11mn1s
    let dizaine_dizaine = timer.innerHTML.substr(30, 2); //ex 11mn11s
    if ((timer.innerHTML.substr(19, 1) == "m") && (timer.innerHTML.substr(32, 1) == "s")) {
      time = Number(dizaine) + Number(dizaine_unite);
    } else if ((timer.innerHTML.substr(19, 1) == "m") && (timer.innerHTML.substr(33, 1) == "s")) {
      time = Number(dizaine) + Number(dizaine_dizaine);
    } else if ((timer.innerHTML.substr(18, 1) == "m") && (timer.innerHTML.substr(31, 1) == "s")) {
      time = Number(unite) + Number(unite_unite);
    } else if ((timer.innerHTML.substr(18, 1) == "m") && (timer.innerHTML.substr(32, 1) == "s")) {
      time = Number(unite) + Number(unite_dizaine);
    }
    setInterval(countDown, 1000);
  }
} else {
  alert("sessionStorage n'est pas supporté");
}