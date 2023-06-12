//Mouse over and Mouse Out property: 

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover',function(){
    console.log("Mouse Over triggered!");
})

outerDiv.addEventListener('mouseout',function(){
    console.log("Mouse Out triggered!");
})


//this is keyPress event: 
var keypress = document.getElementById('search');
keypress.addEventListener('keypress',function(event){
    console.log("A is Key Pressed!",event.keyCode);
})

//this is keyup and keydown event: 

var keyUP = document.getElementById('search');
keyUP.addEventListener('keyup',function(event){
    console.log('Up key is pressed!!',event.keyCode);
})

var keyDOWN = document.getElementById('search');
keyDOWN.addEventListener('keydown',function(event){
    console.log("Down key is pressed!",event.keyCode);
})