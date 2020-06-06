class CheckingBeforeCanvas {
  static validate() {
    let lncr = lastname.value;
    let fncr = firstname.value;
    let regex = /^[a-zA-ZÀ-ÿ -]+$/;
    if (lncr == "" && fncr == "") {
      lastname.focus();
      alert('Veuillez entrer votre nom et votre prénom SVP !');
    } else if (lncr == "" && fncr != "") {
      lastname.focus();
      alert('Veuillez entrer votre nom SVP !');
    } else if (lncr != "" && fncr == "") {
      firstname.focus();
      alert('Veuillez entrer votre prénom SVP !');
    } else if (lncr != "" && regex.test(lncr) == false) {
      alert("Chiffres et caractères spéciaux ne sont pas autorisés pour votre nom SVP !");
      lastname.focus();
      return false;
    } else if (lncr != "" && lncr.length < 2) {
      alert("Minimum 2 caractères pour votre nom SVP !");
      lastname.focus();
    } else if (lncr != "" && lncr.length > 30) {
      alert("Maximum 30 caractères pour votre nom SVP !");
      lastname.focus();
    } else if (fncr != "" && regex.test(fncr) == false) {
      alert("Chiffres et caractères spéciaux ne sont pas autorisés pour votre prénom SVP !");
      firstname.focus();
      return false;
    } else if (fncr != "" && fncr.length < 2) {
      alert("Minimum 2 caractères pour votre prénom SVP !");
      firstname.focus();
    } else if (fncr != "" && fncr.length > 30) {
      alert("Maximum 30 caractères pour votre prénom SVP !");
      firstname.focus();
    } else if (lncr != "" && fncr != "" && regex.test(lncr) == true && regex.test(fncr) == true) {
      firstname.focus();
      signature.style.display = "block";
      signature_block.style.display = "inline-block";
      btn.style.display = "inline-block";
      resa_button.style.display = "inline-block";
      btn_one.style.display = "inline-block";
      resa_block.style.display = "none";
      self.location.href = '#resa_status';
    }
  }
}
class CancelBooking {
  static cancel() {
    cancel_one.style.display = "none";
    end = 0;
    info_ctdn.innerHTML = "";
    stationName.innerHTML = "";
    resaBy.innerHTML = "";
    resaName.innerHTML = "";
    timer.innerHTML = "Location Annulée";
    clearInterval(interval);
    alert("Location Annulée");
    sessionStorage.clear();
    window.location.reload();
  }
}

function convertSec(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  return min + " minutes et " + sec + " secondes";
}

function countDown() {
  end++;
  timer.innerHTML = "Temps restant : " + (convertSec(time - end));
  sessionStorage.setItem("timer_booked", timer.innerHTML);
  if ((time - end) == 0) {
    cancel_one.style.display = "none";
    info_ctdn.innerHTML = "";
    stationName.innerHTML = "";
    resaBy.innerHTML = "";
    resaName.innerHTML = "";
    timer.innerHTML = "Location Terminée";
    alert("Location Terminée");
    clearInterval(interval);
    sessionStorage.clear();
    window.location.reload();
    self.location.href = '#titre_veloc';
  }
}