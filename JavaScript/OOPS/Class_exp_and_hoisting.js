// Classes cannot be called without use of "new" keyword.

 //Classes can be assigned to variables as well.
 
//Un-named class declaration: 
var Vehicle = class {
    constructor(newWheels,price){
        this.newWheels = newWheels;
        this.price=price;
    }

    getPrice(){
        return this.price;
    }
}

//Named class declaration: 

var Vehicle = class Vehicle{
    constructor(newWheels,price){
        this.newWheels = newWheels;
        this.price=price;
    }

    getPrice(){
        return this.price;
    }
}

var Vehicle_1  = new Vehicle(2,50);
var Vehicle_2 = new Vehicle(4,800);

console.log(Vehicle_1);
console.log(Vehicle_2);