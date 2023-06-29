//Inheritance from Vehicle class into "Car" class: 

var Vehicle = class{
    //cunstructor call: 
    constructor(numWheels,price){
        this.numWheels = numWheels;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }

    printDescription(){
        console.log("Vehicle ",this.numWheels,this.price);
    }
}

class Car extends Vehicle{
    constructor(numDoors,price){
        super(4,price);
        this.numDoors = numDoors;
    }
    
    printDescription(){
        super.printDescription();
        console.log("CAR");
    }
}

var c = new Car(4,500);
console.log(c);
c.printDescription();