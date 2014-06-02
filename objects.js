var Person = function(firstName, lastName) {
	// this.fullName = firstName + ' ' + lastName;
	this.firstName = firstName;
	this.lastName = lastName
};
Person.prototype.fullName = function() {
	return [
	this.firstName,
	this.lastName].join(' ');
};
var person = new Person('Bobs', 'Myuncle');
console.log('%s', person);
console.log('%s', person.firstName);
console.log('%s', person.lastName);
console.log('%s', person.fullName());
