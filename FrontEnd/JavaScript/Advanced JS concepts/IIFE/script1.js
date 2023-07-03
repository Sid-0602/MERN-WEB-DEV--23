

//Enclose these into function scope and not in global scope
//IIFE will have no function name and following syntax: 

(function(){
    var name = "File 1";
    setTimeout(function(){
    console.log(name);
    }, 1000);
}) ();  //function is immediately called. 


