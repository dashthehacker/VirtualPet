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
        window.idle()
    } else {
        isDayTime = true;
        window.idle()
    }
    updateBackground(); 
}


const daynight_css = document.createElement("style");
daynight_css.id = "daynight-css";
document.body.appendChild(daynight_css);


function updateBackground() {
    const backgroundStyle = document.getElementById("daynight-css");
    let daycss = `
    body {
        background: linear-gradient(to top, #87CEFA, #FFD700);
        transition: background 2s ease-in-out;
    }
    `;
    let nightcss = `
    body {
        background: linear-gradient(to top, #2C3E50, #34495E);
        transition: background 2s ease-in-out;
    }`;
    
    if (getIsDayTime()) {
        backgroundStyle.textContent = daycss;
    } else {
        
        backgroundStyle.textContent = nightcss;
    }
    try {idle();} catch {}
    try {updateMusic();} catch {}
}


updateBackground();


initDayNightCycle();


function getIsDayTime() {
    return isDayTime;
}