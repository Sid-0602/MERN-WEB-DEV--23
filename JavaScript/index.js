var a = 10;
console.log("This is 'a': ",a);

var b = 5;
console.log("This is 'b': ",b);
var c= a+b;

console.log("This is addition of 'c': ",c);



var d = 1/0;
console.log(d);


pow=Math.pow(10,3);
console.log(pow);

//this is parseINT function which converts string to int.

int_to_string = parseInt("20");
console.log(int_to_string);


//typeof operator: 
console.log("This is typeof Operator: ");
console.log(typeof(10));


//Automatic type conversion:

console.log("Automatic Type Conversion:");

var sentence = "Hello"
console.log("Original Sentence: ",sentence);
sentence+=2; //js automatically typecasts the number 
console.log("Sentence after updation: ",sentence);