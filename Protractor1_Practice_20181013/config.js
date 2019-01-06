exports.config = {
			seleniumAddress: 'http://localhost:4444/wd/hub',
			specs: ['Practice13_Protractor_Synchronization.js'],
			capabilities: {
				  'browserName': 'chrome'
				},
			jasmineNodeOpts: {
				    defaultTimeoutInterval: 30000
				},

		};	