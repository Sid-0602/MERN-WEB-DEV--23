
function sayHello(){
    console.log("Say Hello!");
}

function sayName(){
    console.log("Hey Sid!!");
}

function ask(){
    console.log("How are you??");
}



sayHello();
setTimeout(sayName,1000); //function and time interval is passed.
//time interval has scale of milliseconds.
setTimeout(ask,2000);

var sec = 1;
function alert(){
    console.log("Please reply!",sec);
    sec++;

    if(sec==6){
        //stop the setInterval after specific amount of time
        console.log("Session Timeout!!");
        clearInterval(id);
    }
} 

var id = setInterval(alert,2000); //this will execute the function in loop after same interval of time.
