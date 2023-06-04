var student = {
    "name":"Carl",
    rollNo: 135,
    marks: 90,
    "2":"two"
};

//prop keywords itrates through all properties: 
for(var prop in student){
    console.log(prop + " property" + " with  value :" + student[prop]);

}

//keys access: 

var keys = Object.keys(student);
console.log("!!! *****************Keys are********************* !!!");
console.log(keys);

//getOwnPropertyNames: 
var keys1 = Object.getOwnPropertyNames(student);
console.log("**********************The keys**********************");
console.log(keys1);

