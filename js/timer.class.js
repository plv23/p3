class Timer {
  constructor(time, end) {
    this.timeLeft = time;
    this.counter = end;
    this.compteur = (time - end);
    this.timerText = timer;
}
start() {
    document.documentElement.style.overflow = 'visible';
    station.style.display = "none";
    signature_block.style.display = "none";
    resa_block.style.display = "none";
    resa_button.style.display = "none";
    btnsignature.style.display = "none";
    btn_one.style.display = "none";
    
   //document.getElementsByClassName("disp").style.display = "none";
    stationName.style.display = "inline-block";
    resa_title.textContent = "Réservation";
    cancel_two.style.display = "inline-block";
    ctdn.style.display = "inline-block";
    cancel_one.style.display = "inline-block";
    let sn_text = station_name.innerHTML;
    let result_sn = sn_text.indexOf('Station') - 4;
    info_ctdn.textContent = "Vélo réservé à la station ";
    stationName.innerHTML = station_name.textContent.substring(0, result_sn);
    resaBy.innerHTML = " par ";
    resaName.innerHTML = firstname.value + " " + lastname.value.toUpperCase();
    this.timerText.innerHTML = convertSec(this.compteur);
    interval = setInterval(countDown, 1000);
    sessionStorage.setItem("station_booked", stationName.innerHTML);
    sessionStorage.setItem("name_booked", resaName.innerHTML);

}
}