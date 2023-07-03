
//another way to write a promise without using new and declaring new Promise.
Promise.resolve("Resolved").then(data=>console.log(data));
Promise.reject("Rejected").then(data=>console.log(data));


//async is a keyword which returns a promise from a function:

/*
async function asyncTask(){
    
    try{
        return "Resolved";
    }
    
    
    catch((msg)=>{
        console.log(msg);
    })
}

asyncTask().then(data=>console.log(data));

*/
//Async and await: 

function getData(){
    return Promise.resolve("Some data");
}

async function abc(){
    const data = getData();
    console.log(data);
    
    abc()
    .catch((msg)=>{
        console.log(msg);
    })
}

abc();

console.log("Outside data");