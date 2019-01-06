describe("Protractor Async Demo", function() {

	it("TestCase01", function() {
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			var title = browser.getTitle().then(function(title){
				console.log( title + " is opened !!");
			});
		    expect(browser.getTitle()).toEqual('Super Calculator');

		});
						
	});

});