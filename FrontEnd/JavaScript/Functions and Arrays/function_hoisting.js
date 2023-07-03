//this makes the initialized variables "hoist" on top.

function hoistDemo(){
    console.log(i);
    console.log(j);
    var i=10;
}
  
hoistDemo();
  
  
var j=10;

//SCOPE: Gloabal and Function: 

var name = "scope"; //this has global scope.

console.log(name);


function scopeDemo(){
  var i=10;  //this has function scope.
  console.log(i);
}

scopeDemo();
