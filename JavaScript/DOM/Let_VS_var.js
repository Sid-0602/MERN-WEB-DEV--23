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

if(a<=10){
    //local scope of m.
    let m="This is m";
}else{
    let n="This is n";
}

console.log(a,m,n);