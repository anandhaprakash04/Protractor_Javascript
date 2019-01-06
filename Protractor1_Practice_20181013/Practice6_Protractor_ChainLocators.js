describe("Protractor chain locators", function() {

	it("TestCase01", function() {

		browser.get("http://juliemr.github.io/protractor-demo/");
		// Repeater, chain locators and css for identical tags

		var first = element(by.model("first"));
		var second = element(by.model("second"));
		var operator = element(by.model("operator"));
		var button = element(by.tagName("button"));
		
		function performAction(a,b,c){
		first.sendKeys(a);
		second.sendKeys(b);
		operator.element(by.xpath("//option[text()='" + c + "']")).click();
		button.click();
		}
		
		performAction(100, 500,"+");
		
		var resultsTable = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
		
		resultsTable.getText().then(function(text) {
			console.log(" The RESULT from the table is " + text);
		})

		performAction(100, 500,"*");
		
		resultsTable.getText().then(function(text) {
			console.log(" The RESULT from the table is " + text);
		})
		
				

	});

});
