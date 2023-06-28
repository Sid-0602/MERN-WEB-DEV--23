

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