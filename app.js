function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

async function sec(){
    var minuts = 25;
    var seconds = 60;
    while (seconds <= 60){
        seconds--;
        if (seconds == -1){
            var minuts = minuts-1
            console.log(minuts)
            var seconds = 59;
        }; 
        console.log(seconds)
        await sleep(1000);
    }
    return seconds
};


// function min(){
//     var minuts = 25;     
//      while (minuts <= 25){
//          minuts--;
//          if (minuts == -1){
//              console.log("Time is up!")
//              break;
//          }; 
//          console.log(minuts)
//          sec();
//      }
//      return minuts
// };

sec()
