//Promise in JS:
/*

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

*/


//syntax of promise is: 
var mypromise1 = new Promise((resolve,reject)=>{
    resolve("Yay!! Promise fullfilled");
});
console.log(mypromise1);


var myPromise2 = new Promise((resolve,reject)=>{
    reject("Something went wrong");
});
console.log(myPromise2);

// setTimeout (wait) function in JS: 

var wait_promise = new Promise(()=>{
    setTimeout(()=>{
        resolve({message:'Success'})
    },3000);
});

console.log(wait_promise);

//this and catch keywords: 


//Then Keyword is called when ever the promise is full filled. 
//Catch Keyword is called when ever the promise is rejected and we also get the error reason.
wait_promise
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("Error Occurred: " , error);
    });



