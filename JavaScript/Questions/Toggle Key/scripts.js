
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const text = document.getElementById('text');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    text.classList.toggle('active');
}
