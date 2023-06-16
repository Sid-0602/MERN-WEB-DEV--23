let string="";
let buttons = document.querySelectorAll('.button');


//The "=>" symbol, also known as the equals greater than symbol or hashrocket, is a shorthand notation for defining functions in JavaScript. It is used to create a new type of function called an arrow function.
Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }


        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
       
    })
})