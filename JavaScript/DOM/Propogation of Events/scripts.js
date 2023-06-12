//click inner div and outer div: 

var clickInner = document.getElementById('inner');
clickInner.addEventListener('click',function(event){
    console.log("Clicked Inner Div");
    event.stopPropagation(); //it stops propagation to outer and document itself.
})

var clickOuter = document.getElementById('outer');
clickOuter.addEventListener('click',function(){
    console.log("Clicked Outer Div");
})

//propagation of events is carried out till document.
document.addEventListener('click',function(){
    console.log("Clicked On document");
})