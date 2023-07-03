//setTimeout is not a JS function, it is API given by the browsers.

console.log(1);
setTimeout(function(){
    console.log(2);
},0);

console.log(3); 

//In call Stack, the setTimeout function is called after the timer ends.