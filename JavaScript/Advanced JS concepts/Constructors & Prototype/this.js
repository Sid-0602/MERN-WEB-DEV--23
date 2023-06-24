//There are 4 rules to determine the value of "this" keyword


// Rule 1: "new" keyword

//It returns Vechile object with empty value.
function Vechile(name){
    this.name = name; //in this step, "this" is assigned the name into empty object 
    console.log(this);
}

new Vechile('Car');

