// Classes object creation using functions: 
//The createStudent has this structure: {name, rollNo, marks}
function createStudent(name,rollNo, marks){
    var student = {}; //new Object();
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;

    return student;
}

var student1 = createStudent("Sid",322060,95); //object "Student1" created
var student2 = createStudent("Raj",332302,70); //object "Student2" created

console.log(student1);
console.log(student2);