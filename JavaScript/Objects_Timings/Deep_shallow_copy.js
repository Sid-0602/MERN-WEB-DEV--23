//Primitive datatypes are deep copy.
//Objects and arrays are by default made into shallow copy.

const a=10;
const b=a;
let c = b;

console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);

//These value are before changing the values of c.

c = 25;
console.log("a: ",a);
console.log("b: ",b);
console.log("c: ",c);


//In case of Arrays and objects: 

var arr = [1,2,3,4,5];

var susan= {
    name: "Susan",
    age:30,
    address: {  
        city: "Pune",
        state: "Maharashtra"
    }
}

console.log("!! Before Change !!");
console.log(susan);


var raj=susan;  //this is shallow copy. Raj and Susan points to same object. 
raj.name = "Raj";

console.log("!! After Change !!")
console.log(susan);


//Making Deep Copy using spread operator: 

var raman  = {...susan};
console.log(raman);
raman.name = "Raman";
console.log(raman);

console.log(susan);

//Making Deep Copy using Object.assign() operator: 

var virat = Object.assign({},susan);

console.log(virat);
virat.name="Virat";
virat.age = 34;
virat.address["city"] = "Delhi";
virat.address["state"]="Delhi";
console.log(virat);
