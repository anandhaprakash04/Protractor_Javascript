// Basics
console.log("Anand");
var a = 4;
var b = 5;
var a1= "Hello";
console.log(a1+a);
console.log(a+b);

//Conditonal statements

if(a1=="Hello")
	console.log(a1=="Hello");
else 
	console.log(a1="ga");

// Conditional loops

for(var i=0;i<=100;i+=3){
	console.log(add(i,i+3));	
}

for(var i=2;i<=23;i+=3){
	console.log(add(i,i+3));	
}

/// functions 
function add(a,b){
	return a+b;
}

