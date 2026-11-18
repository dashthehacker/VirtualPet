document.getElementById('feed').addEventListener('click', function() {
    const feedCost = 10;  
    const hungerReplenish = 20;  

    if (money >= feedCost && hunger != 100) {
        scratch();
            setTimeout(function() {
            idle();  
        }, 5000);  
        feed(hungerReplenish);  
        spendMoney(feedCost);  
    }
});

isDayTime = true;

function initDayNightCycle() {
    
    window.daynightcycle = setInterval(switchDayNight, 300000); 
}


function switchDayNight() {
    if (isDayTime) {
        isDayTime = false;
    } else {
        isDayTime = true;
    }
    updateBackground(); 
    // Why does it not register when the game loads T-T
    try {
        window.cat.idle();
    } catch(e) {
        console.log("Cry about it (this is expected at game load)")
    }
}


const daynight_css = document.createElement("style");
daynight_css.id = "daynight-css";
document.body.appendChild(daynight_css);


function updateBackground() {
    if(document.getElementById("daynight-css") !== null) {
        const backgroundStyle = document.getElementById("daynight-css");
        backgroundStyle.remove();
    }    
    if (getIsDayTime()) {
        document.body.classList.add("daytime");
        document.body.classList.remove("nighttime");
    } else {
        document.body.classList.add("nighttime");
        document.body.classList.remove("daytime");
    }
    try {idle();} catch {}
    try {updateMusic();} catch {}
}


updateBackground();


initDayNightCycle();


function getIsDayTime() {
    return isDayTime;
}