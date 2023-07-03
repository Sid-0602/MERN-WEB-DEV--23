var array = [2,3,5,6,'sid',3.1417];

array.splice(2,1); //delete elements starting from 2 and delete 1 element. 
console.log(array);

array.splice(2,0,10); //insert 10 at index 2
console.log(array);




//this is user-made pop function defined using splice function.
function pop_atindex(x){
    array.splice(x,1);
}

console.log("!! This is pop operation performed by function !!")
pop_atindex(0);
console.log(array);



array.splice(2); //this deletes all the elements after the specified index as no delete count is defined. 
console.log(array);