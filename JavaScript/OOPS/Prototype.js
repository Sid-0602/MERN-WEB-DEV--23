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