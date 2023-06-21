var i=10;

function outer(){
    var j=20;
    console.log(i,j);
    var inner = function(){
        var k=30;
        console.log(j,k);
    }
    return inner;
}


var inner = outer(); //at this point, outer function is completely executed. 
inner(); //this function call should not return but due to clousers, it will.