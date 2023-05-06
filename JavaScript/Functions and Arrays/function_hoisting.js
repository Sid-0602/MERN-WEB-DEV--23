//this makes the initialized variables "hoist" on top.

function hoistDemo(){
    console.log(i);
    console.log(j);
    var i=10;
}
  
hoistDemo();
  
  
var j=10;