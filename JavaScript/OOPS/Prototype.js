//Prototype in JS

// read more @ : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

//prototypes are useful when used in Constructor mode.
function Vehicle(numWheels,price){
    this.numWheels = numWheels;
    this.price = price;

    //these functions will have behaviors.
    this.getPrice = function(){
        return this.price;
    }
}

console.log(Vehicle.prototype); //this will print the constructor and __proto__ 
console.log(Vehicle.prototype.constructor); //this will return function "Vehicle".