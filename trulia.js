//Select the actual address input on Trulia
var address_input = document.getElementById('searchbox_form_location');
var submit_button = document.getElementsByClassName('btn btnPrimary submit')[0];

chrome.storage.local.get('propertyAddress', function(data){
	//Fill this input with a value
	address_input.value = data.propertyAddress;
	submit_button.click();
});