class Slider {
  constructor(doms, config) {
    this.doms = doms;
    this.controls = doms.controls;
    for (let i = 0; i < this.controls.length; i++) {
      this.controls[i].style.display = 'inline-block';
    }
    this.slides = doms.slides;
    this.currentSlide = 0;
    this.slideInterval = setInterval(this.nextSlide.bind(this), config.timer);
    this.playing = config.playing;
    this.pauseButton = doms.pause;
    this.nextButton = doms.next;
    this.previousButton = doms.previous;
  }
  listenEvents(listenKeyboardEvents) {
    //Affectation des clicks sur controls
    this.pauseButton.onclick = function() {
      if (this.playing) {
        this.pauseSlideshow();
      } else {
        this.playSlideshow();
      }
    }.bind(this);
    this.nextButton.onclick = function() {
      this.pauseSlideshow();
      this.nextSlide();
    }.bind(this);
    this.previousButton.onclick = function() {
      this.pauseSlideshow();
      this.previousSlide();
    }.bind(this);
    //Affectation des touches claviers
    document.addEventListener("keydown", function(e) {
      if (e.keyCode === 32) {
        event.preventDefault();
        this.pauseButton.click();
      } else if (e.keyCode === 39) {
        this.nextButton.click();
      } else if (e.keyCode === 37) {
        this.previousButton.click();
      }
    }.bind(this));

    if (listenKeyboardEvents != true) {
      return;
    }
  }
  playSlideshow() {
    this.doms.pause.innerHTML = '&#10074;&#10074;'; // caractère Pause
    this.playing = true;
    this.slideInterval = setInterval(this.nextSlide.bind(this), 5000);
    this.doms.previous.style.background = "#333";
    this.doms.previous.style.color = "#fff";
    this.doms.next.style.background = "#333";
    this.doms.next.style.color = "#fff";
    this.doms.pause.style.background = "#eee";
    this.doms.pause.style.color = "#333";
  }
  pauseSlideshow() {
    this.doms.pause.innerHTML = '&#9658;'; // caractère Lecture
    this.playing = false;
    clearInterval(this.slideInterval);
    this.doms.previous.style.background = "#333";
    this.doms.previous.style.color = "#fff";
    this.doms.next.style.background = "#333";
    this.doms.next.style.color = "#fff";
    this.doms.pause.style.background = "#eee";
    this.doms.pause.style.color = "#333";
  }
  nextSlide() {
    this.goToSlide(this.currentSlide + 1);
    this.doms.next.style.background = "#eee";
    this.doms.next.style.color = "#333";
    this.doms.previous.style.background = "#333";
    this.doms.previous.style.color = "#fff";
    this.doms.pause.style.background = "#333";
    this.doms.pause.style.color = "#fff";
  }
  previousSlide() {
    this.goToSlide(this.currentSlide - 1);
    this.doms.previous.style.background = "#eee";
    this.doms.previous.style.color = "#333";
    this.doms.next.style.background = "#333";
    this.doms.next.style.color = "#fff";
    this.doms.pause.style.background = "#333";
    this.doms.pause.style.color = "#fff";
  }
  goToSlide(n) {
    this.slides[this.currentSlide].className = 'slide';
    this.currentSlide = (n + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].className = 'slide showing';
  }
}