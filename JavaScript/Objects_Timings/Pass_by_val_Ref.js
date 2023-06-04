

// Primitive datatypes are passed by Value. (change are not reflected).
// Functions and arrays are passed by Reference. (changes can be done into original value).
function f(a,b,c){
    a=3;
    b.push("bob");
    c.first = false;
}

var x=4;
var y = ["Raj","Rahul"];
var z = {
    first:true
};


console.log("***************Previous Values *************");
console.log("Value of x: ",x);
console.log("Value of y: ",y);
console.log("Value of z: ",z);

console.log("*******After Function call*******************");
f(x,y,z);

console.log("Value of x: ",x);
console.log("Value of y: ",y);
console.log("Value of z: ",z);


