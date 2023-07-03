var i=10;

function outer(){
    var j=20;
    console.log(i,j);
    var inner = function(){
        var k=30;
        console.log(i,j,k);
        j++;
        k++;
        i++;
    }
    return inner;
}


var inner= outer(); //at this point, outer function is completely executed. 
inner(); //this function call should not return but due to closures, it will.

inner();  //this will give k=30, as both function calls will produce k value as 30 initially.
          // this will give j=20 for first call and j=21 for second call, as j is in scope of outer function. 

inner(); //j=22.


//this has global scope as we have declared it with var.

function test1(){
for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

console.log("After for loop: ",i);
}

test1(); 


//this i has local scope due to "let" variable.

function test2(){
    setTimeout(function(){
        console.log("This is for LET variable!!");
    },1000); 
for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

}

test2();