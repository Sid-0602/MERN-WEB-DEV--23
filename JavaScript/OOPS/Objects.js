

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

var Vehicle_1 = new Vehicle(2,50);
var  Vehicle_2 = new Vehicle(4,800); //Objects created. 

console.log(Vehicle_1);
console.log(Vehicle_2);
console.log(Object.getPrototypeOf(Vehicle_1));

// Prototype Chain Using the following code: 

function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red" ;
B.prototype.color = "green" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);



