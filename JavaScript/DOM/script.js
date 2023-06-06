//this is console part.
console.log("Hello! This is Console");

function say_hello(){
    alert('Hello Bachoooo');
}

function sayBye(){
    alert('Byee!!');
}

var hellobtn = document.getElementById('btn2');
hellobtn.addEventListener('click',say_hello);
hellobtn.addEventListener('click',sayBye); //there are 2 event listners for this button.



