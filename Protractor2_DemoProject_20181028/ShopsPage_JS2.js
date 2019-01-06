describe("ECommerceShoPage", function() {

	function selectProduct(requiredproduct) {
//		console.log("product :" + requiredproduct )	
		var product = element.all(by.css("app-card[class='col-lg-3 col-md-6 mb-3']"));
		product.each(function(item) {
//			console.log("Product inside: "+ requiredproduct);
			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == requiredproduct) {
					item.element(by.css("button")).click().then(function() {
						console.log("Selected : " + text)
//						browser.sleep(5000);
					});
				}

			})
		})
	}

	it("TestCase01", function() {

		browser.get("https://qaclickacademy.github.io/protocommerce/");

		var shopLink = element(by.linkText("Shop"));

		shopLink.click();

		
		selectProduct("Nokia Edge");
		selectProduct("Samsung Note 8");
		selectProduct("iphone X");
		selectProduct("Blackberry");
		
			var checkOut = element(by.partialLinkText("Checkout"));
			checkOut.getText().then(function(text){
			var res = text.split("(");
//			var res1 = text.replace("","");
			var replaced = text.replace(/\s/g, '');
			console.log(res[0] + "------"  + replaced);
			expect(res[1].trim().charAt(0)).toBe("8");
				
			})
			
		});


});