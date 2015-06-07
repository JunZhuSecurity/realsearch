//Select the actual address input on Trulia
var address_input = document.getElementById('Location');
var submit_button = document.getElementById('btnSearchHomePage');

chrome.storage.local.get('propertyAddress', function(data){
	//Fill this input with a value
	address_input.value = data.propertyAddress;
	submit_button.click();
});