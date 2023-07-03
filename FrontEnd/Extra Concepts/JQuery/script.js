// Using plain javaScript: 

var para1=document.getElementById('para1');
para1.innerHTML = "This Updated by JavaScript";


//Using JQuery:

// Step 1: Fetch the desired element.
//Step 2: Update the innerHTML.
$('#para2').html('Welcome. Updated by JQuery');
/*
    function $(query){
        return (document.querySelector(query));
    }

    The result this returns is JQuery Object and not DOM object.
    Proof:  
    
    var p = $('para2');
    console.log(p)
    jQuery.fn.init [prevObject: jQuery.fn.init(1)]

*/

//Hiding the paragraph: 

$('#para3').hide();

//fetch width of para: 
$('#para1').width(100);