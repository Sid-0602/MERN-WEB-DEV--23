"use strict"; //this throws errors and updates us. 

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;

box.addEventListener('click', function(){
    count++;
    var bar=100;
    console.log("Clicked : ",count);
    clickCount.innerText = count + " ";
});




