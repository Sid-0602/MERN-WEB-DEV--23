//This is for-of statement: 

var arr=[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//this is for-of -> This gives us values of arrays/Objects in JS.
console.log("This is For-Of");
for(let i of arr){
    console.log(i);
}


console.log("This is For-In");
//this is for-in -> This gives us index of arrays/Objects in JS.
for(let i in arr){
    console.log(i);
}
