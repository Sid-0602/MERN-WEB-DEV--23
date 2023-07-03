var a = 1/0;
console.log(a);


pow=Math.pow(10,3);
console.log(pow);

//this is parseINT function which converts string to int.

int_to_string = parseInt("20");
console.log(int_to_string);


//typeof operator: 
console.log("This is typeof Operator: ");
console.log(typeof(10));


//This is tricky question.
var x = 4;
var y = x++;
y += 1;
console.log(y);


console.log("Automatic Type Conversion:");

var sentence = "Hello"
console.log("Original Sentence: ",sentence);
sentence+=2; //js automatically typecasts the number 
console.log("Sentence after updation: ",sentence);
