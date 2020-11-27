//get the styling of the p 
var minTimer = document.getElementById('timer-minuts')
var secTimer = document.getElementById('timer-seconds')
minTimer.textContent = 25;
secTimer.textContent = "00";

//buttons
var reseter = document.getElementById('reset');
var stop = document.getElementById('stop');


// In JavaScript, a promise is an object that returns a value which you hope to 
// receive in the future, but not now.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //this function is to wait 1 second
};

var minuts = 25;

function handleMinuts() {
    minuts -= minuts;
    if (minuts == 0 && seconds == 0){
            alert("Time is up")
    } else if (minuts < 10){
            minTimer.textContent = `0${minuts}`;
    } else{
            minTimer.textContent = `${minuts}`;
    };
    

    return minuts -1;
};


async function handleSeconds(){
    
    var seconds = 60;
    while (seconds <= 60){
        seconds--; 
        if (seconds < 10){
            secTimer.textContent = `0${seconds}`;
            
        } else{
            secTimer.textContent = seconds;
            console.log(seconds);
            
        };

        if (seconds == 00){
            handleMinuts();
            var seconds = 60;               
        };

        await sleep(1000); //wait for the promise sleep() to settle, or to wait for 1 sec to finish.
         
    }
    return seconds
    
}; onclick="resetTimer();"

stop.addEventListener('click', (e) => {
    e.preventDefault();
    handleSeconds();
});


reseter.addEventListener('click', (e) =>{
    e.preventDefault;
    minTimer.textContent = 25;
    secTimer.textContent = "00";
    
});



