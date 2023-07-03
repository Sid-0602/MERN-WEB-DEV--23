//Prototype in JS

// read more @ : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

//prototypes are useful when used in Constructor mode.
function Vehicle(numWheels,price){
    this.numWheels = numWheels;
    this.price = price;

    //these functions will have behaviors.
    /*this.getPrice = function(){
        return this.price;
    }
    */
}

Vehicle.prototype.getPrice = function(){
    return this.price;
};


console.log(Vehicle.prototype); //this will print the constructor and __proto__ 
console.log(Vehicle.prototype.constructor); //this will return function "Vehicle".

var Vehicle_1 = new Vehicle(2,50);
var  Vehicle_2 = new Vehicle(4,800);


Vehicle_1.getPrice();

//Adding property in Run-time: 

Vehicle.prototype.color = "Black";
console.log(Vehicle_1.color);
console.log(Vehicle_2.color);


//  Dunder Proto:    __Proto__ 

console.log(Vehicle_1.__proto__);
console.log(Vehicle_2.__proto__);

//Note: Use of Dunder proto is deprecated from ES6 version of JS.

//Alternative: Use of getPrototypeOf:
console.log("Alternate method: ",Object.getPrototypeOf(Vehicle_1));

//isPrototypeOf: 
console.log("IS method: ",Vehicle.prototype.isPrototypeOf(Vehicle_1));

//check if property is inherited from Parent Function or Prototype: 
console.log("No. of Wheels : ",Vehicle_1.hasOwnProperty('numWheels'));
console.log("Price : ",Vehicle_1.hasOwnProperty('price'));
console.log("Get Price : ",Vehicle_1.hasOwnProperty('getPrice'));
console.log("Color : ",Vehicle_1.hasOwnProperty('color'));

//Property changes in Object specifically: 
Vehicle_1.color = "White";
console.log("Color in Prototype: ",Vehicle.prototype.color);
console.log("Color in Vehicle 1: ",Vehicle_1.color);
console.log("Color in Vehicle 2: ",Vehicle_2.color);