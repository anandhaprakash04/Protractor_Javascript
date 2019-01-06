describe(
			"ECommerceSubmitForm", 
			function() 
			{
				it(
					"TestCase01", 
					function() {
								
						browser.get("https://qaclickacademy.github.io/protocommerce/");
//						browser.manage().window().maximize();
//						browser.manage().timeouts().implicitlyWait(10000);
						
						var name = element(by.css("div[class='form-group'] input[name='name']"));
						var email = element(by.css("div[class='form-group'] input[name='email']"));
						var password= element(by.css("input[id='exampleInputPassword1']"));
						var checkIceCream = element (by.css("input[id='exampleCheck1']"));
						
						/*// Method 1 
						var selectMale= element($("select[id='exampleFormControlSelect1']>option:nth-child(1)"));
						var selecFemale= element($("select[id='exampleFormControlSelect1']>option:nth-child(2)"));*/
						
						// Method 2 						
						var selectMale= element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Male"));
						var selectFemale= element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female"));
						
						var empStatusText = element.all(by.css("div[class='form-check form-check-inline'] label"));
						var empStatus = element.all(by.css("div[class='form-check form-check-inline'] input"));
						
						var bday = element(by.name("bday"));
						var button = element(by.buttonText("Submit"));
						
						name.sendKeys("AnandhaPrakash Mani");
						email.sendKeys("anandhaprakash@gmail.com");
						password.sendKeys("123456");
						checkIceCream.click();
						selectFemale.click();
						
						var empStatusInput = "Employed";
						var countStatus = null; 
						empStatusText.count().then(function(count){
												console.log("The count is " + count)
												countStatus = count; 
												console.log("The count is 1: " + countStatus);
											}).then(function()	{					
									for (var i = 0; i < countStatus; i++) {
										console.log("Before condition" + "Index is -->"  + i)
										console.log("countStatus " + countStatus);
										
										(function(i){
												empStatusText.get(i).getText().then(function(text) {
												console.log("Radio button text is --> " + text + " and Index is inside function before if condition is -->"  + i)
													if (text == empStatusInput) {
														console.log(" Inside If: Radio button text is --> " + text + " and Index is inside if condition is -->"  + i)
														empStatus.get(i).click();
														console.log(" Inside If after click: Radio button text is --> " + text + " and Index is inside if condition is -->"  + i)
														
													}
												})
										}).call(this, i);
								}			
						})
						
						bday.sendKeys("08/05/1986");
						button.click().then(function(){
							element(by.css("div[class*='success']")).getText().then(function(text){
								console.log(text);
							})
						});
						   
							
				});

});