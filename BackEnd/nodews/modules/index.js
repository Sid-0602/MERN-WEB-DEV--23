//A module is a reusable part of code that is later imported to main file with driver code. 
const operations = require('./operations'); //require function is used to include node module and libraries.

console.log(operations.add(2,3));
console.log(operations.multiply(2,3));
console.log(operations.division(2,3));


/* To understand function(req,res): */

function something(callback){
    var x = 5;
    var y = 'anything';
    callback(x,y);
}


something(function(req,res){
    console.log(req);
    console.log(res);
})