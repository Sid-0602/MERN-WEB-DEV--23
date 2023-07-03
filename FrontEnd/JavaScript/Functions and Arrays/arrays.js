var arr = [1,2,3,4]; //assigning list of values to the var

var arr2 = new Array(1,2,3,4,5);
console.log(arr2[3]);

console.log("The numbers in the second array is: ");
for(var i=0; i<4; i++){
    console.log(arr2[i]);
}

//edit array at some index in array: 
arr[1]= 10;
console.log("New value at this index is: ",arr[1]);

arr[7]=52;
console.log("The numbers in the first array is: ");
for(var i=0; i<arr.length; i++){ //arr.length gives length of array. 
    console.log(arr[i]);
}

//Using array constructor: 

console.log("This is dynamic allocation of array!!");


var arr3 = new Array(10);

for(var i=0;i<arr3.length;i++){
    arr3[i]=i*2;
}

for(var i=0;i<arr3.length;i++){
   console.log(arr3[i]);
}

//heterogenous array datatypes: 

console.log("heterogenous array datatypes");
var arr_hetero = ["sid",2,-2,3.12];

for(var i=0; i<arr_hetero.length;i++){; 
    console.log("Datatype is:  ",typeof(arr_hetero[i]),"value: ",arr_hetero[i]);
}


// Functions and keyword command in array: 

console.log("!! These are functions and commands in array !!")
var array = [4,5,6,7];

console.log(array.length);
array.push(10);               // this pushes an element in end. 
console.log(array);           
console.log(array.length);
array.pop();                  //this pops out a element from end.
console.log(array);
console.log(array.length);

array.shift();
console.log(array);  //left shifts the array, and left most value gets removed. 

array.unshift();     // this right shits the array, and right most value gets removed.
console.log(array);

