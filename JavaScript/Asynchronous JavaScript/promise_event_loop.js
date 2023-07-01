//Promises and Event Loop: 

setTimeout(function(){
    console.log(1);
},0);

var promise = new Promise(function(resolve,reject){
    resolve(2);
});

promise.then(function(data){
    console.log(data);
});

console.log(3);


// Callbacks of Promises: Micro-Task Queue.
// Callbacks of setTimeout/setInterval functions: Task Queues.

// Priority of Micro-Task Queue > Task-Queue.