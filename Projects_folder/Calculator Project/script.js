let string="";
let buttons = document.querySelector('button');

Array.from(buttons).forEach((button)=>{

    buttons.addEventListener('click',(e)=>{
        console.log(e.target);
        
    })

})