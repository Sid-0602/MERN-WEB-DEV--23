var student={
    "name":"Carl", 
     rollNo: 135, 
     marks:90,
     "-pass":"Yes",
     "2":"two"
}; //This is key-value pair in form of object.


function printProperty(obj,prop){
    console.log(obj[prop]);  //using square bracket notation. 
}

console.log(student);
student.marks=95; // accessing/changing the property of object.
console.log(student);

console.log(student.sem);
student.sem=6; //adding a new key/field into the object. 
console.log(student);


//Square Bracket Notations: 
var obj={};
var obj = new Object(); //using Object Constructor.

console.log(student["marks"]); // equivalent to student.marks access.
console.log(student["-pass"]); //it is used to access certain special cases of names.
console.log(student["2"]); //this is also used when there is property starting with name.



//Printing property using function: 

var prop = "marks";
console.log(printProperty(student,prop));


//deleting property: 

delete student.sem; //using "." notation. 
console.log(student);

delete student["2"]; //using square bracket notation. 
console.log(student);