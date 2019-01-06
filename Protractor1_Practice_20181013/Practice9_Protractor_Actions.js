describe("Protractor All locators", function() {

	it("posseTestCase01", function() {
		
		browser.get("http://posse.com/");
		var act = browser.actions();
		
		var searchForPlaces = element(by.model("userInputQuery"));
		searchForPlaces.sendKeys("river");
		var locationQuery = element(by.css("input[ng-model='locationQuery']"));
		
		/*
		 * locationQuery.sendKeys("").then(function(){ browser.sleep(10000);
		 * console.log("print0"); });
		 */
		
		/*
		 * act.mouseMove(locationQuery).click().sendKeys("London").perform().then(function(){
		 * browser.sleep(10000); console.log("print1"); });
		 */
		
		act.click(locationQuery).sendKeys("London").perform().then(function(){
			browser.sleep(500);
			console.log("print1");
		})
		
		act = browser.actions();
		
		act.sendKeys(protractor.Key.ARROW_DOWN).perform().then(function(){
			browser.sleep(500);
			console.log("print2");
		});
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(500);
			console.log("print3");
		});
		
		
		var results = element.all(by.css("div[ng-mouseover*='onSearchResultOver(searchResult)']"));
		
		results.count().then(function(count){
			console.log("Number of results returned :" + count);
		})
		
		expect(results.count()).toEqual(7);
		
//		Method#1 of getting sublocators inside an main element
		results.each(function(item) {
			
			item.element(by.css("span[ng-bind*='searchResult.place.name']")).getText().then(function(text){
			console.log("The title :" + text);
			})
			
		})
		
		results.each(function(item) {
			var link = item.element(by.css("div[ng-mouseover*='onSearchResultOver'] a"))
			act.sendKeys(protractor.Key.CONTROL).click(link).perform();
			
		})
		
		
/*
//		Method#2 of directly getting the element
		var title = element.all(by.css("span[ng-bind='searchResult.place.name']"));
		
		title.each( function(item) {
		item.getText().then(function(text){
			console.log("The title :" + text);
			})
		})*/
	
	});

});
