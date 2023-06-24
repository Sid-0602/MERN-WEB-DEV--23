//There are 4 rules to determine the value of "this" keyword


// Rule 1: "new" keyword

//It returns Vechile object with empty value.
function Vechile(name){
    this.name = name; //in this step, "this" is assigned the name into empty object 
    console.log(this);
}

new Vechile('Car');

// Rule 2: "Explicit Binding": 

const john = {
    name: "John",
};

function ask(){
    console.log(this,this.name);
}


ask.call(john); //call function is asking ask() function to call john object.
ask.apply(john);


//Hard Binding Rule: 

var raj={
    name: 'Raj',
    greet: function(){
        console.log('Hello',this);
    }
}

raj.greet();
var localAsk = raj.greet;
localAsk();//this will give us output of window as it is called in global scope. Instead use hard-binding for this.

var localGreet = raj.greet.bind(raj); //this is hard-binded to "raj" object.
localGreet();
//It can be used for other functions like setTimeOut:
setTimeout(raj.greet.bind(raj),1000);
