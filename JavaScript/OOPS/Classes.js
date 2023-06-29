//classes in JS:

class Vehicle{

    constructor(numWheels,price){
        this.numWheels = numWheels;
        this.price=price;
    }

    getPrice(){
        return this.price;
    }
}

var Vehicle_1 = new Vehicle(2,50);
var  Vehicle_2 = new Vehicle(4,800); 

class Person {
    constructor(name) { this.name = name; }
}
console.log(typeof(Person)); //this gives output as "function" 