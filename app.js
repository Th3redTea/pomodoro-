
// const { breakSeconds } = require("./break");

//get the styling of the p 
var minTimer = document.getElementById('timer-minuts')
var secTimer = document.getElementById('timer-seconds')
minTimer.textContent = 1;
secTimer.textContent = "00";

//buttons
var reseter = document.getElementById('reset');
var stop = document.getElementById('stop');


//Selection buttons
var twoFive = document.getElementById('btn-25') 
var threeFive = document.getElementById('btn-35') 
var fourFive = document.getElementById('btn-45')

twoFive.addEventListener('click', (e) => {e.preventDefault 
    minuts = 25
});
threeFive.addEventListener('click', (e) => {e.preventDefault 
    minuts = 35
});
fourFive.addEventListener('click', (e) => {e.preventDefault 
    minuts = 45
});


// In JavaScript, a promise is an object that returns a value which you hope to 
// receive in the future, but not now.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //this function is to wait 1 second
};

function handleMinuts() {
    minuts--;
    if (minuts == -1 && seconds == "00"){
            alert("Time is up")
    } else if (minuts < 10){
            minTimer.textContent = `0${minuts}`;
            
    } else{
            minTimer.textContent = `${minuts}`;
    };
    
    return minuts;
};


async function handleSeconds(){
    
    var seconds = 60;
    while (seconds <= 60){
        seconds--; 
        if (seconds < 10){
            secTimer.textContent = `0${seconds}`;
            
        } else{
            secTimer.textContent = seconds;
                        
        };

        if (seconds == 00){
            await handleMinuts();
            var seconds = 60;               
        };

        await sleep(1000); //wait for the promise sleep() to settle, or to wait for 1 sec to finish.
        if (minTimer.textContent === "00" && secTimer.textContent === "00"){
            alert("Time is up")
            await breakk.breakSeconds();
            break;
        } 
    }
    return seconds
    
};
export {handleSeconds};


stop.addEventListener('click', (e) => {
    e.preventDefault();
    handleSeconds();
});


reseter.addEventListener('click', (e) =>{
    e.preventDefault;
    minTimer.textContent = 25;
    secTimer.textContent = "00";
    
});



