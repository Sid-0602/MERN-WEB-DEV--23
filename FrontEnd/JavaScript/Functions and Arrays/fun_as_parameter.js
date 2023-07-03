
var factorial = function fact(n){  //this is unnamed/anonymous  function exp.

    if(n==0){
        return 1;
    }

    return n * factorial(n-1);

};

function ncr(n,r,factorial){
    return factorial(n)/factorial(r)*factorial(n-r);
}

console.log("Value of nCr formula for the same is: ",ncr(5,2,factorial));