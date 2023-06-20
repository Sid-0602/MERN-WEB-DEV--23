
//Smooth Scroll using Scroll By and Scroll To:

var targetPosition = 1500;
var currentPosition = 0;


var scrollInterval = setInterval(function(){

    if(currentPosition>=targetPosition){
        clearInterval(scrollInterval);
        return;
    }
    currentPosition+=50;
    window.scrollBy(0,50);
},50);

