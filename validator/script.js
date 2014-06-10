$(function() {



	$( "form" ).submit(function( event ) {
		console.log('submit');
		var a = $("input[name='name']");
		console.log(a);
		event.preventDefault();
	});
});


// $('head').append('<title>My Blog</title>');