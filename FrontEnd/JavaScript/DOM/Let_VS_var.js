var a =10;

//b and c are hoisted and moved to top of program. 

if(a<=10){
    var b="This is b";
}else{
    var c="This is c";
}

console.log(a,b,c);

//LET is used to create variables in block scope: 
 
console.log("!! This is for LET !!")
/*
if(a<=10){
    let m="This is m";
}else{
    let n="This is n";
}

console.log(a,m,n); //This is not allowed as m, n are in local scope.

*/



// LET VS VAR : 


console.log("For VAR for loop: ");
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}


for(let i=0;i<5;i++){

    //every setInterval has each of its own i value.
    setTimeout(function(){
        if(i==0){
            console.log("For LET for loop: ");
        }
        console.log(i);
    },1000);
}