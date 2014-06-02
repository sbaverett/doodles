var greet = function(greeting, name) { 
	return greeting + ' ' + name; 
};
var partialRight = function()


var greetFred = partialRight(greet, 'fred');
greetFred('hi'); 
console.log(greetFred);


//=> 'hi fred'