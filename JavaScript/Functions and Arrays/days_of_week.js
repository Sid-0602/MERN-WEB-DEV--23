var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


function returnDay(x){
	return ( (x<1) || (x>7) ? null: days[x-1]);    
}

console.log(returnDay(3));