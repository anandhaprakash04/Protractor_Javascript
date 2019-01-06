describe("Protractor Alerts", function() {

	it("TestCase01", function() {

		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");

		element(by.id("alertbtn")).click();

		browser.switchTo().alert().accept().then(function() {
			browser.sleep(80000);
		});

	});

});
