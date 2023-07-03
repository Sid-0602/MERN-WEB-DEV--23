//This is count-down clock

var sec= 5;
function timer(){
    console.log("T -" + sec + " Seconds" );
    sec--;

    if(sec<=0){
        clearInterval(id);
        console.log("And........Lift OFF!!!!!");
    }
    
}

var id = setInterval(timer,1000);
