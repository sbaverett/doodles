$(function() {
'use strict';

	$('form').submit(function(event) {
		var nameField = $("input[name='name']");
		var cityField = $("input[name='city']");
		var stateField = $("input[name='state']");
		if(nameField.val() === '' || stateField.val() === '' || cityField.val() === '')
			alert('Please complete all fields.');	
		event.preventDefault();
	});
	
});


// $('head').append('<title>My Blog</title>');