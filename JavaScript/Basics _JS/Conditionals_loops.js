
/* *******************CONDITIONALS************************ */ 


console.log("********* Conditionals ***********")
var a= 0;
if(a>0){
    console.log("Positive");
}
else if(a==0){
    console.log("ZER0");
}
else{
    console.log("Negative");
}

//here in case of non-zero number, this will give output as true.
var b = -1;
if(b){
    console.log("True");
}else{
    console.log("False");
}

//for zero, it will give output as false.
var c = 0;
if(c){
    console.log("True");
}else{
    console.log("False");
}

//for strings:

//Rule: for empty strings, it will give value as false. otherwise true.

var string_ = "aaaa";
if(string_){
    console.log("True");
}else{
    console.log("False");
}

//important concept:
console.log("*********This is null==undefinied case ***********")
console.log(null==undefined);


/* ******************* LOOPS ************************ */ 

console.log("********* Loops ***********")

var i=1;
while(i<=5){
    console.log(i);
    i++;
}

for(x=1;x<=5;x++){
    console.log("Hello "+x+" time")
}
