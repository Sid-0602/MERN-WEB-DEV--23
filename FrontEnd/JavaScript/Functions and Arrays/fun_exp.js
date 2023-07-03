//Function expressions is way to create a function. 

var factorial = function fact(n){  //this is named function exp.

    var ans=1;
    for(var i=0;i<n;i++){
        ans = ans*i;
    }

    return ans;

};

var factorial2 = function (n){  //this is unnamed/anonymous  function exp.

    if(n==0){
        return 1;
    }

    return n * factorial2(n-1);

};

console.log("Hello!!")
console.log(factorial);
console.log(factorial2);
console.log(factorial(5));
console.log(factorial2(6));
