document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('address-form-submit').addEventListener('click', function() {
		var propertyAddress = document.getElementById('property-address').value;

        chrome.storage.local.set({'propertyAddress': propertyAddress});

    	chrome.tabs.create( 
    		{ url: 'http://trulia.com' }, 
    		function(tab){
    			chrome.tabs.executeScript(tab.id, {
			        file: "trulia.js",
			        runAt: 'document_idle'
			    });
    		}
    	);

    	chrome.tabs.create( 
    		{ url: 'http://zillow.com' }, 
    		function(tab){
    			chrome.tabs.executeScript(tab.id, {
			        file: "zillow.js",
			        runAt: 'document_idle'
			    });
    		}
    	);

    	chrome.tabs.create( 
    		{ url: 'http://realtor.com' }, 
    		function(tab){
    			chrome.tabs.executeScript(tab.id, {
			        file: "realtor.js",
			        runAt: 'document_idle'
			    });
    		}
    	);
	});
});
