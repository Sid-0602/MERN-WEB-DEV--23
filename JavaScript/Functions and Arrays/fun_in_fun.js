
var name = "global";


function outer(){
    var name = "outer";
    var outerver = 10;
    function inner(){

        var name = "inner";
        var innervar=100;
        console.log(innervar);
        console.log(outerver + 11 );
        console.log(name);
    }
    inner(); //inner function call. This will return the value of inner function. 
    console.log(name);

}


outer();
console.log(name);