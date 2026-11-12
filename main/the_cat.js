class Cat {
  constructor(imgElement, name = "cat") {
    this.imgElement = imgElement;
    this.name = name;
    this.currentInterval = null;

    document.addEventListener("DOMContentLoaded", () => {
      if (localStorage.getItem("green") === "true") {
        this.imgElement.style.filter =
          "grayscale(100%) sepia(1) hue-rotate(80deg) saturate(100)";
      }
    });
  }

  setCat(imgsrc) {
    this.imgElement.src = imgsrc;
  }

  sleep() {
    this.setCat(`${this.name}/sleeping.gif`);
  }

  stare() {
    this.setCat(`${this.name}/stare.gif`);
  }

  scratch() {
    this.setCat(`${this.name}/scratch.gif`);
  }

  idleDay() {
    this.stare();
  }

  idleNight() {
    this.sleep();
  }

  stopAnimation() {
    this.setCat(`${this.name}/idle.png`);
  }

  getIsDayTime() {
    return window.isDayTime;
  }

  idle() {
    if (this.getIsDayTime()) {
      this.idleDay();
    } else {
      this.idleNight();
    }
  }

  sleepthecat() {
    this.sleep();
  }

  hijackcat() {
    clearInterval(this.currentInterval);
    this.imgElement.src = "";
    window.alert(
      `Please stop toying with my leftover code from a garbage "boss fight" I made a long time ago.`
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("img");
  window.cat = new Cat(imgElement, "cat");
  window.cat.idle();
});