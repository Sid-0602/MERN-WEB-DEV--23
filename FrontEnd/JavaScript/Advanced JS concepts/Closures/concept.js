
var message = "Good Global"
function hello1(){
    let message = "Good Morning";
    console.log("Hello 1 "+message);


    let c = function hello2(){
        console.log("It is c: "+ message);
    }

    return c;
}

c=hello1();
c();