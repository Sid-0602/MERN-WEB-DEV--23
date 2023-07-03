//Class Inheritance Exersice Question: 

/* A class Person is defined already, 
Create a class named Student inheriting the Person class and consisting of the properties class and rollNo. 
Then, create another class named Teacher inheriting Person class and consisting of the properties teacherId and subject. 
Call the constructor of its parent in both the classes. Create a method getDetails() in both the classes which will return an array with data in the following order:
For Student [name,rollNo,class]
For Teachers [name,teacherID,subject]
The constructors of both the classes will receive arguments in the same order. */

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person{
    constructor(name,rollNo,Class){
        super(name);
        this.rollNo = rollNo;
        this.Class = Class;
    }
    
    getDetails(){
        return [this.name, this.rollNo, this.Class];
    }
}
  
class Teacher extends Person{
    constructor(name,teacherID,subject){
        super(name);
        this.teacherID = teacherID;
        this.subject = subject;
    }

    getDetails(){
        return [this.name, this.teacherID, this.subject];
    }
}


var Student_1 = new Student("Raj",1,10);
var Teacher_1 = new Teacher("Ram",1,"Maths");

console.log(Student_1);
console.log(Teacher_1);


console.log(Student_1.getDetails());