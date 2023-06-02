var arr = [1,2,3,4];
 
function rotateLeft(arr){
    var first_element = arr[0];
    arr.shift();
    arr.push(first_element);

    return arr;
}

rotateLeft(arr);
console.log(arr);