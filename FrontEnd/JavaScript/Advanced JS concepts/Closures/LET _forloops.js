
//Scope of LET is LOCAL and inside a block scope.


var arr = new Array(6);

for(let i=0;i<=5;i++){
    i++;
    arr[i]=function(){
        console.log(i);
    }
    i--;
}