describe("Protractor All locators", function() {

	var first = element(by.model("first"));
	var second = element(by.model("second"));
	var operator = element(by.model("operator"));
	var button = element(by.tagName("button"));

	function performAction(a, b, c) {
		first.sendKeys(a);
		second.sendKeys(b);
		operator.element(by.xpath("//option[text()='" + c + "']")).click();
		button.click();
	}

	it("TestCase01", function() {

		browser.get("http://juliemr.github.io/protractor-demo/");
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(5000);
 		performAction(100, 500, "+");
		performAction(100, 966, "/");
		performAction(100, 4750, "+");

		var resultsTable = element.all(by.repeater("result in memory"));

		resultsTable.count().then(function(count) {
			console.log("Total operations " + count);
		})

		resultsTable.each(function(item) {

			item.element(by.css("td:nth-child(1)")).getText().then(
					function(text) {
						console.log(text);
					});

			item.element(by.css("td:nth-child(2)")).getText().then(
					function(text1) {
						console.log(text1);
					});

			item.element(by.css("td:nth-child(3)")).getText().then(
					function(text2) {
						console.log(text2);
					});

		})

		var dropdownValues = element.all(by.tagName("option"));
		dropdownValues.each(function(item) {
			item.getAttribute("value").then(function(text) {
				console.log(text)
			})
		})

	});

});
