//get the styling of the p 
let minTimer = document.getElementById('timer-minuts')
let secTimer = document.getElementById('timer-seconds')

//buttons
let reseter = document.getElementById('reset')
let stop = document.getElementById('stop')


//Timer start here


var minuts = 25;
var seconds = 60;

//this function is to wait 1 second
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};



async function sec(){
    
    while (seconds <= 60){
        seconds--;
         
        if (seconds < 10){
            secTimer.innerText = `0${seconds}`;
        } else{
            secTimer.innerText = seconds;
            
        };

        if (seconds == -1){
            min();
            var seconds = 59;               
         };
        await sleep(1000);
    }
    return seconds
    
};

function min() {
    var minuts = minuts - 1;
        if (minuts = 0){
            minTimer.innerText = `0${minuts}`;
                alert('Time is up! Go for a rest!')
        } else if (minuts < 10){
                minTimer.innerText = `0${minuts}`;
        } else{
                minTimer.innerText = `${minuts}:`;
        };
};



//the reset function 

function reset(){
    minTimer.innerText = 25;
    secTimer.innerText = "00";

}



