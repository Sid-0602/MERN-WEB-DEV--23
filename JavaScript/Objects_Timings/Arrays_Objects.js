// Arrays and Objects are same in JavaScript

var arr = [20,30,40,50,,,,100];
console.log("****************The Array is *************");
console.log(arr);
console.log("The lenght of array is: ",arr.length);
console.log();

console.log("****************The Keys are *************");
var keys = Object.keys(arr);
console.log(keys);
console.log();

//this is equivalent object for the array: 
var obj = {
    "0": 20,
    "1":30,
    "2":40,
    "3":50,
    "6":100
}

console.log(obj);
var size = Object.keys(obj).length;
console.log("Size of object is: ",size);
console.log("!! Object and Array are same in JS !!");

