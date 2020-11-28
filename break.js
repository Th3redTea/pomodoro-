
var fiveMinuts = document.getElementById('btn-5')
var sevenMinuts = document.getElementById('btn-7')
var fifteenMinuts = document.getElementById('btn-15')

var selector = document.querySelector('select');

var minuts;

fiveMinuts.addEventListener('click', () => { 
    minuts = 5 
    selector.style.transform = 'translateY(100%)';
    import {handleSeconds} from './app'

    app.handleSeconds()
});
sevenMinuts.addEventListener('click', () => { 
    minuts = 7 
    selector.style.transform = 'translateY(100%)';
    import {handleSeconds} from './app'

    app.handleSeconds()
});
fifteenMinuts.addEventListener('click', () => { 
    minuts = 15 
    selector.style.transform = 'translateY(100%)';
    import {handleSeconds} from './app'

    app.handleSeconds()
});

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


async function breakSeconds(){
    
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
            break;
        } 
    }
    return seconds
    
};

export {breakSeconds};
