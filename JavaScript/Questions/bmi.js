var weight = 58;
var height = 1.6;

var BMI_index = weight/(height*height);
console.log("Your Body Mass Index is: ",BMI_index);

if(BMI_index<=18.5){
    console.log("You are Underweight");
}else if(BMI_index=>18.5 && BMI_index<=24.9){
    console.log("You are Healthy")
}else if(BMI_index=>25 && BMI_index<=29.9){
    console.log("You are Overweight")
}else if(BMI_index=>30 && BMI_index<=24.9){
    console.log("You are Obese")
}