describe("Protractor All locators", function() {

	it("posseTestCase01", function() {
		
		var act = browser.actions();
		
		var searchForPlaces = element(by.model("userInputQuery"));
		searchForPlaces.sendKeys("river");
		var locationQuery = element(by.css("input[ng-model='locationQuery']"));
	
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
		var link = null;
		results.count().then(function(count){
			
			console.log("Number of results returned :" + count);
			
			for(var j=0;j<count;j++){
				
				results.get(j).element(by.css("div[ng-mouseover*='onSearchResultOver'] a")).click();
//					act.sendKeys(protractor.Key.CONTROL).click(link).perform();
					console.log("clicking on links + " +j);
			}
		})
		
		
		browser.getAllWindowHandles().then(function(windows){
		
			for(var i=0;i<windows.length;i++){
				browser.switchTo().window(windows[i]);
				browser.getTitle().then(function(title){
					console.log("The title of "+ i  +"th window is :" + title)
				})
				}
			})
			
			
			browser.switchTo().defaultContent();
		
	
		
	});

});
