console.log("Hello Node :)");

function add(a,b){
    return (a+b);
}


console.log(add); //returns definition of function. 
console.log(add(4,5));

console.log(process.argv); //process function is global scoped function that can oversee all the code.

var args = process.argv.slice(2);
console.log("Adding the numbers: ",add(parseInt(args[0]),parseInt(args[1])));