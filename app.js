//get the styling of the p right
//



let minTimer = document.getElementById('timer-minuts')
let secTimer = document.getElementById('timer-seconds')

//buttons
let reseter = document.getElementById('reset')
let stop = document.getElementById('stop')


reseter.addEventListener('click', sec());
//Timer
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

async function sec(){
    var minuts = 25;
    var seconds = 60;
    while (seconds <= 60){
        seconds--;
        if (seconds == -1){
            var minuts = minuts - 1;
            if (minuts = 0){
                minTimer.innerText = `0${minuts}`;
                alert('Time is up! Go for a rest!')
            } else if (minuts < 10){
                minTimer.innerText = `0${minuts}`;
            } else{
                minTimer.innerText = `${minuts}:`;
            }
            var seconds = 59;
        }; 
        if (seconds < 10){
            secTimer.innerText = `0${seconds}`;
        } else{
            secTimer.innerText = seconds;
            
        };
        await sleep(1000);
    }
    return seconds
};


