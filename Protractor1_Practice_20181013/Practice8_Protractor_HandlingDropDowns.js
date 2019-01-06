describe("Protractor All locators", function() {

/*	var first = element(by.model("first"));
	var second = element(by.model("second"));
	var operator = element(by.model("operator"));
	var button = element(by.tagName("button"));

	function performAction(a, b, c) {
		first.sendKeys(a);
		second.sendKeys(b);
		operator.element(by.xpath("//option[text()='" + c + "']")).click();
		button.click();
	}*/

	it("TestCase01", function() {
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		var dropdownValues = element.all(by.tagName("option"));
		dropdownValues.each(function(item) {
			item.getAttribute("value").then(function(text) {
				console.log(text)
			})
		})

		
	});

});
