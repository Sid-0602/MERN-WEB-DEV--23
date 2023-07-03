//let solves the problem of global scope over-riding variable.


//
{
    let name = "File 3";
    setTimeout(function(){
    console.log(name);
    }, 1000);
}