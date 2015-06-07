document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('address-form-submit').addEventListener('click', function() {
		var propertyAddress = document.getElementById('property-address').value;

    	chrome.tabs.create( { url: 'http://trulia.com' });
    	chrome.tabs.create( { url: 'http://zillow.com' });
    	chrome.tabs.create( { url: 'http://realtor.com' });
	});
});
