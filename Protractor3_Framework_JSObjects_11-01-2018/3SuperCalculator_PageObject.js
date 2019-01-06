/*var carObj = new car();
carObj.getModel();
console.log(carObj.color + "  " + carObj.engine);*/


function SuperCalculator()
{
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.operator = element(by.model("operator"));
	this.goButton = element(by.id("gobutton"));
	
	this.launchCalculator= function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
	}
	
	this.performAction = function(a, b, c) {
		this.firstInput.sendKeys(a);
		this.secondInput.sendKeys(b);
		this.operator.element(by.xpath("//option[text()='" + c + "']")).click();
		this.goButton.click().then(function(){ browser.sleep(1000)});
		
		console.log("Inside the function :) ");
	}	
	
	this.getnValidateResult = function(result){
		
		var result1 = element(by.css("tr:nth-child(1) td:nth-child(3)"));
		result1.getText().then(function(text){
			console.log("The result is : " + text)
		});
		expect(result1.getText()).toBe(result);
		
	}

}

module.exports = new SuperCalculator();

