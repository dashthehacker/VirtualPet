function newsleep(delayInSeconds) {
    return new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
}

function hack_corner_text(text) {
    document.getElementById('sleepy-text').textContent=text;
}


function saveGame() {
    const saveData = {
        money: money,
        happiness: happiness,
        hunger: hunger,
        isDayTime: isDayTime
    };

    
    localStorage.setItem('virtualPetSave', JSON.stringify(saveData));
    console.log("Game saved successfully!");
}


function loadGame() {
    const saveData = localStorage.getItem('virtualPetSave');
    
    if (saveData) {
        const parsedData = JSON.parse(saveData);
        
        
        money = parsedData.money;
        happiness = parsedData.happiness;
        hunger = parsedData.hunger;
        isDayTime = parsedData.isDayTime;

        
        updateMoney();
        updateHappiness();
        updateHunger();
        switchDayNight();
        switchDayNight();
        updateBackground();

        if (money < 0 || hunger < 0 || hunger > 100 || happiness < 0 || happiness > 100) {
                localStorage.removeItem('virtualPetSave');
                bankrupt();
                happiness = 100;
                hunger = 100;
                isDayTime = true;
                saveGame();
                if (!secretFlag) {alert("Save file was curropted. Reset successfully :)");}
                loadGame();
        }

        console.log("Game loaded successfully!");
    } else {
        console.log("No save data found.");
    }
}

const the_bar_to_inject_into = document.getElementById("option-buttons");
const save_btn = document.createElement("button");save_btn.textContent = "SAVE";save_btn.id="save";the_bar_to_inject_into.appendChild(save_btn);
const load_btn = document.createElement("button");load_btn.textContent = "LOAD";load_btn.id="load";the_bar_to_inject_into.appendChild(load_btn);
save_btn.addEventListener('click', saveGame);
load_btn.addEventListener('click', loadGame);
