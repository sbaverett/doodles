//Statement 1
var dogWalk = function() {
	console.log('Rowdy needs a walk.')
};
dogWalk();

//Statement 2
var dog = {name: 'Rowdy', collarColor: 'black', leashColor: 'brown'};
var dogCollar = function(dog) {
	return dog.name + " has a " + dog.collarColor + " collar.";
};
console.log(dogCollar(dog));

//Statement 3
var dogLeash = function(dog) {
	return (dog.name + " has a " + dog.leashColor + " leash.")	
}; 
console.log(dogLeash(dog));

//Statement 4
console.log('The dog with the ' + dog.collarColor + " collar needs a walk.");

//Statement 5
console.log(dog.name +"'s leash is " + dog.leashColor + '.');

//Statement 6
console.log(dog.name + " has a " + dog.collarColor + " collar.");
