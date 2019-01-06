/*var carObj = new car();
carObj.getModel();
console.log(carObj.color + "  " + carObj.engine);*/


function car()
{
	this.color = "Red";
	this.engine = "Turbo"
	this.brand = "BMW";
	
	this.getModel = function(){
		console.log("This is 2020 model");
	};

}

module.exports = new car();

