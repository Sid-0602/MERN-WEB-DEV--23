var arr = [2,3,4,5,6,7];

//this is traditional method: 
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//this is for-each method: 

//we create a function to print element passed as argument.
function print(element,index,array){
    console.log(element);
}

arr.forEach(print); //no need to pass argument in print function here.
