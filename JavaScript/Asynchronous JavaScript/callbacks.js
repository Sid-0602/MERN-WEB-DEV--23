//Callbacks in JS: 
//A callback is a function passed as an argument to another function.

function greet(name,callback){
    console.log(`Hi ${name}`);
    callback();
}

function askQuestions(){
    console.log("How are you??");
}

greet('John',askQuestions);


//Testing callback functions for heavy computation and their ability to run in background. 

console.log(1); //this is executed 1st.

console.log(2); //this is executed 2nd.

//this is executed 4th.
setTimeout(function(){
    console.log("Computations that takes for 1 sec");
})

var myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
        console.log("Computations that takes 3 secs");
    })
})

myPromise.then(function(data){
    console.log(data);
});

console.log(myPromise); //this is executed 3rd.


