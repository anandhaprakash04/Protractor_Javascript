exports.config = {
			seleniumAddress: 'http://localhost:4444/wd/hub',
			specs: ['SubmissionOfFormsVariousLocators_JS1.js'],
			capabilities: {
				  'browserName': 'chrome'
				},
			jasmineNodeOpts: {
				    defaultTimeoutInterval: 30000
				},

		};	