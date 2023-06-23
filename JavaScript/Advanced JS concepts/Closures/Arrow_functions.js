//Arrow Functions: 

//Arrow function expressions are alternatives to traditional functions that were first introduced in ES6. 
//Aside from a relatively concise syntax, arrow functions have a few semantic differences along with some limitations.

/* 

    var multiply = function(x,y){
        return x*y;
    }

*/

//it's equivalent way to write the above function: 

var multiply = (x,y) => {return x*y};

//also written as: 

var multiply = (x,y) => x*y;

var double = x => x*2;

console.log(multiply(5,3));
console.log(double(2));



//Binding in Arrow Function: 

function Person(name){
    this.name = name;
    console.log(this);

    setTimeout(function(){
        console.log("This is for normal function: ");
        console.log(this);
    },1000)
    //binding in Arrow is different as it takes reference from outside scope/reference.
    setTimeout(() => console.log(this),1000); //using arrow function.
}

var p= new Person("Sid");

