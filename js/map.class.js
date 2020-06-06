class Map {
  constructor(infos) {
    this.Mapid = infos.element;
    this.Latitude = infos.latitudeInit;
    this.Longitude = infos.longitudeInit;
    this.Zoom = infos.zoomInit;
    this.UrlApi = infos.urlApiInit;
  }

  ajaxGet(url, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
      if (req.status >= 200 && req.status < 400) {
        // Appelle la fonction callback en lui passant la réponse de la requête
        callback(req.responseText);
      } else {
        console.error(req.status + " " + req.statusText + " " + url);
      }
    });
    req.addEventListener("error", function() {
      console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
  }

  showMap() {
    let map = L.map(this.Mapid).setView([this.Latitude, this.Longitude], this.Zoom);
    tileStreets.addTo(map);
    this.ajaxGet(this.UrlApi, function(reponse) {
      let info = JSON.parse(reponse);
      info.forEach(function(info) {
        icon = icons.green;
        if (info.available_bikes < 10 && info.available_bikes >= 1) {
          icon = icons.orange;

        } else if (info.available_bikes == 0 && info.status == 'OPEN') {
          icon = icons.orange;
        } else if (info.status == 'CLOSED') {
          icon = icons.red
        }
        let marker = L.marker([info.position.lat, info.position.lng, info.name], {
          icon: icon
        }).addTo(map)
        .bindPopup(info.name.substr((info.name.indexOf('-') + 2)) +
          '<br>' + info.status.replace('OPEN', 'Station OUVERTE').replace('CLOSED', 'Station FERMÉE') +
          '<br>' + info.available_bike_stands + " place(s) " +
          '<br>' + info.available_bikes + " vélo(s) disponible(s) ")
        .on('click', MarkerOnMouseOnClick.onClick)
        .on('mouseover', MarkerOnMouseOver.onMouseover)
        .on('mouseout', MarkerOnMouseOut.onMouseout);
      });
    });
  }
}
class MarkerOnMouseOnClick {
  static onClick(e) {
    let popup = e.target.getPopup();
    let content = popup.getContent();
    let statusText = content.replace('CLOSED', 'FERMÉ');
    station_name.innerHTML = statusText;
    if (timer.innerHTML != "") {
      alert("Réservation en cours, cliquer sur le bouton Annuler pour effectuer une nouvelle réservation.");
      return;
    } else {
      if (station_name.innerHTML.indexOf("FERMÉE") > -1) {
        station_name.style.color = "red";
        resa_block.style.display = "none";
      } else if (station_name.innerHTML.indexOf("<br>0 vélo(s) disponible(s)") > -1) {
        station_name.style.color = "red";
        resa_block.style.display = "none";
      } else {
        resa_block.style.display = "block";
        resa.style.display = "block";
        station.style.display = "block";
        station_name.style.display = "block";
        station_name.style.color = "#877667";
        resa_block.style.display = "block";
        resa_button.style.display = "block";
        btn.style.display = "none";
        btn_one.focus();
      }
    }
  }
}
class MarkerOnMouseOver {
  static onMouseover(e) {
    let ouvrepopup = e.target.openPopup();
  }
}
class MarkerOnMouseOut {
  static onMouseout(e) {
    let fermepopup = e.target.closePopup();
  }
}