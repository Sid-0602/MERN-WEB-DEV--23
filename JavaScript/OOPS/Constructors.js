
//Constructors and Behaviors of objects.
function Student(name,rollNo, marks){
    //var student = {}; //new Object();
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
    console.log("This value is: ",this);
    //return student;
}

var student1 = new Student("abcd",15,80); //new keyword will create an object and will pass the parameters will be passed to method.
var student2 = Student("pqrs",20,99); //the value of this in this will be "window".
console.log(student1);
console.log(student2);


//Adding behaviors to objects: 


function Vehicle(numWheels,price){
    this.numWheels = numWheels;
    this.price = price;

    //these functions will have behaviors.
    this.getPrice = function(){
        return this.price;
    }
}



var Vehicle_1 = new Vehicle(2,50000);
var Vehicle_2 = new Vehicle(4,800000);

console.log(Vehicle_1);
console.log(Vehicle_2);

Vehicle_1.getPrice(); //this gives output of 500000.

//Note: the function is copied across all the objects instead of one in main class.
//This can be tackled by Prototype.