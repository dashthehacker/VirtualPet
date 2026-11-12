
const imgElement = document.getElementById("img");
currentcat = "cat"

let currentInterval;


function sleep() {
    setCat(currentcat + "/sleeping.gif");
}


function stare() {
    setCat(currentcat + "/stare.gif");
}


function scratch() {
    setCat(currentcat + "/scratch.gif");
}


function idleDay() {
    setCat(currentcat + "/stare.gif");
}


function idleNight() {
    sleep();
}


function setCat(imgsrc) {
    imgElement.src = imgsrc; 
}


function stopAnimation() {
    setCat(currentcat + "/idle.png");
}


function idle() {
    if (getIsDayTime()) {
        idleDay(); 
    } else {
        idleNight(); 
    }
}


idle();


function getIsDayTime() {
    return window.isDayTime;
}

window.sleepthecat = function() {
    setCat(currentcat + "/sleeping.gif");
}


window.hijackcat = function() {
    clearInterval(currentInterval);
    imgElement.src = "";
    window.alert(`Please stop toying with my leftover code from a garbage "boss fight" I made a long time ago.`);
}


document.addEventListener("DOMContentLoaded", () => { if (localStorage.getItem("green") === "true") { document.getElementById("img").style.filter = "grayscale(100%) sepia(1) hue-rotate(80deg) saturate(100)"; } });