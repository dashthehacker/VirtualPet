let hunger = 100;  
const hungerElement = document.getElementById('hunger');  
let hungerInterval;  


function updateHunger() {
    hungerElement.textContent = `Hunger: ${hunger}%`;
}


function decreaseHunger() {
    if (hunger > 0) {
        hunger -= 5;
        if (hunger <= 0) {
            hunger = 0;
            
        }
        updateHunger();
    }
}


function feed(amount) {
    hunger += amount;
    if (hunger > 100) {
        hunger = 100;  
    }
    if (hunger < 0) {
        hunger = 0;
    }
    updateHunger();
}


function startHungerDecrease() {
    hungerInterval = setInterval(decreaseHunger, 60000);
}


function stopHungerDecrease() {
    clearInterval(hungerInterval);
}


function play() {
    if (hunger > 0) {
        hunger -= 2;  
        if (hunger < 0) hunger = 0;
        updateHunger();
    }
}




function wakeUp() {
    startHungerDecrease();
}


updateHunger();
startHungerDecrease();
