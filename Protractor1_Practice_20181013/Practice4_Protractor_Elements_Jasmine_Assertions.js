describe("Protractor Elements", function() {

	it("TestCase01", function() {

		browser.get("http://juliemr.github.io/protractor-demo/");

		element(by.model("first")).sendKeys("10");
		element(by.model("second")).sendKeys("10");
		element(by.tagName("button")).click();

		//Jasmine takes care of promise resolving
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
		
		
		var total1 = element(by.css("h2[class='ng-binding']")).getText().then(
				function(total1) {
					console.log("The total1 is " + total1)
				})
				
//		expect(total).toBe("10");

		var total = element(by.className("ng-binding")).getText().then(
				function(total) {
					console.log("The total is " + total)
				})

	});

});
