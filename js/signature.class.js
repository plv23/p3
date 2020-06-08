class CanvasObject {
  constructor(Canvas, colorLine, weightLine) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = colorLine;
    this.ctx.lineWidth = weightLine;
    this.draw = false;
    this.empty = true;
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.lastPosition = this.mousePosition;
    this.clearButton = document.getElementById("btnClear");
    this.button = document.getElementById("btnSignature");
    this.canvas.width = 240;
    this.canvas.height = 160;
  }
  events() {
    this.canvas.addEventListener("mousedown", function(e) {
      document.documentElement.style.overflow = 'hidden';
      this.draw = true;
      this.empty = false;
      this.lastPosition = this.getMposition(e);
    }.bind(this));
    this.canvas.addEventListener("mousemove", function(e) {
      document.documentElement.style.overflow = 'hidden';
      this.mousePosition = this.getMposition(e);
      this.canvasResult()
    }.bind(this));
    this.canvas.addEventListener("mouseup", function(e) {
      document.documentElement.style.overflow = 'visible';
      this.draw = false;
      this.button.focus();
      this.button.style.display = "inline-block";
    }.bind(this));
    // Stop scrolling (touch)
    document.body.addEventListener("touchstart", function(e) {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }.bind(this));
    document.body.addEventListener("touchend", function(e) {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }.bind(this));
    document.body.addEventListener("touchmove", function(e) {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }.bind(this));
    // Touchpad
    this.canvas.addEventListener("touchstart", function(e) {
      this.mousePosition = this.getTposition(e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    }.bind(this));
    this.canvas.addEventListener("touchmove", function(e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    }.bind(this));
    this.canvas.addEventListener("touchend", function(e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      this.canvas.dispatchEvent(mouseEvent);
    }.bind(this));
    //Effacer
    this.clearButton.addEventListener("click", function(e) {
      this.clearCanvas()
    }.bind(this));
  }
  // Renvoie les coordonnées de la souris 
  getMposition(mouseEvent) {
    if (this.draw) {
      var oRect = this.canvas.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - oRect.left,
        y: mouseEvent.clientY - oRect.top
      };
    }
  }
  // Renvoie les coordonnées du pad 
  getTposition(touchEvent) {
    var oRect = this.canvas.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - oRect.left,
      y: touchEvent.touches[0].clientY - oRect.top
    };
  }
  // Dessin du canvas
  canvasResult() {
    if (this.draw) {
      this.ctx.strokeStyle = colorLine;
      this.ctx.lineWidth = weightLine;
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
      this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
      this.ctx.stroke();
      this.lastPosition = this.mousePosition;
    }
  };
  // Vide le dessin du canvas
  clearCanvas() {
    this.canvas.width = this.canvas.width;
    this.ctx.lineWidth = weightLine;
    this.button.style.display = "none";
  }
}