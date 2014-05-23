var person1 = {
	name: "Whitney",
	firstWord: "dada"
};
var person2 = {
	name: "Sam",
	firstWord: "ham sandwich"
};
var speak = function(person) {
	console.log(person.name +
		" says " + person.firstWord + " for the first time.");
};

speak(person1);
speak(person2);