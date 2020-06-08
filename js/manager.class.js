class CheckingBeforeCanvas {
  static validate() {
    let lncr = document.getElementById("lastname").value;
    let fncr = document.getElementById("firstname").value;
    let regex = /^[a-zA-ZÀ-ÿ -]+$/;
    if (lncr == "" && fncr == "") {
      document.getElementById("lastname").focus();
      alert('Veuillez entrer votre nom et votre prénom SVP !');
    } else if (lncr == "" && fncr != "") {
      document.getElementById("lastname").focus();
      alert('Veuillez entrer votre nom SVP !');
    } else if (lncr != "" && fncr == "") {
      document.getElementById("firstname").focus();
      alert('Veuillez entrer votre prénom SVP !');
    } else if (lncr != "" && regex.test(lncr) == false) {
      alert("Chiffres et caractères spéciaux ne sont pas autorisés pour votre nom SVP !");
      document.getElementById("lastname").focus();
      return false;
    } else if (lncr != "" && lncr.length < 2) {
      alert("Minimum 2 caractères pour votre nom SVP !");
      document.getElementById("lastname").focus();
    } else if (lncr != "" && lncr.length > 30) {
      alert("Maximum 30 caractères pour votre nom SVP !");
      document.getElementById("lastname").focus();
    } else if (fncr != "" && regex.test(fncr) == false) {
      alert("Chiffres et caractères spéciaux ne sont pas autorisés pour votre prénom SVP !");
      document.getElementById("firstname").focus();
      return false;
    } else if (fncr != "" && fncr.length < 2) {
      alert("Minimum 2 caractères pour votre prénom SVP !");
      document.getElementById("firstname").focus();
    } else if (fncr != "" && fncr.length > 30) {
      alert("Maximum 30 caractères pour votre prénom SVP !");
      document.getElementById("firstname").focus();
    } else if (lncr != "" && fncr != "" && regex.test(lncr) == true && regex.test(fncr) == true) {
      document.getElementById("firstname").focus();
      document.getElementById("signature").style.display = "block";
      document.getElementById("signature-block").style.display = "inline-block";
      document.getElementById("btn").style.display = "inline-block";
      document.getElementById("resa-button").style.display = "inline-block";
      document.getElementById("btn1").style.display = "inline-block";
      document.getElementById("resa_block").style.display = "none";
      self.location.href = '#resa_status';
    }
  }
}
class CancelBooking {
  static cancel() {
    document.getElementById("cancel1").style.display = "none";
    end = 0;
    document.getElementById("info_countdown").innerHTML = "";
    document.getElementById("stationName").innerHTML = "";
    document.getElementById("resaBy").innerHTML = "";
    document.getElementById("resaName").innerHTML = "";
    document.getElementById("timer").innerHTML = "Location Annulée";
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
  document.getElementById("timer").innerHTML = "Temps restant : " + (convertSec(time - end));
  sessionStorage.setItem("timer_booked", document.getElementById("timer").innerHTML);
  if ((time - end) == 0) {
    document.getElementById("cancel1").style.display = "none";
    document.getElementById("info_countdown").innerHTML = "";
    document.getElementById("stationName").innerHTML = "";
    document.getElementById("resaBy").innerHTML = "";
    document.getElementById("resaName").innerHTML = "";
    document.getElementById("timer").innerHTML = "Location Terminée";
    alert("Location Terminée");
    clearInterval(interval);
    sessionStorage.clear();
    window.location.reload();
    self.location.href = '#titre_veloc';
  }
}