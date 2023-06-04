var student = {
    "name":"Carl",
    rollNo: 135,
    marks: 90,
    address:{
        city: "Pune",
        pincode: 400147
    }
};

var keys = Object.getOwnPropertyNames(student);
console.log(keys);

console.log(student);
console.log(student.address);
console.log(student.address["city"]);


