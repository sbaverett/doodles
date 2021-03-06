// From Whitney's email "drills"
//Create an array of foods. Ex: egg, apple, onion, pear
//Use map to create a new array of all plural

// Does map only deal with arrays? Or does it return the same type it starts with?
var foods = ['apple', 'banana', 'plum'];
console.log(foods);
var pluralFoods = foods.map (function(item) {
	return item + 's';
});
console.log(pluralFoods);

// Create an array of foods, but make some of them plural already.
// Use map to create a new array of all plurals
// Hint: Getting the last letter of a string is the same as 
// getting the last element of an array: string[string.length-1]

var foodsSingularAndPlural = ['onion', 'apples', 'kumquate', 'bananas'];
var foodsAllPlural = foodsSingularAndPlural.map(function(food) {
	if (food[food.length-1] === 's')
		return food;
		else 
			return food + 's';
}); 		
console.log(foodsAllPlural);

// Create an array of people objects that have a name and an age. 
// Ex: Jill is 27, Ryan is 35, Al is 12, Susan is 44
// Use map to get back just an array of names: Jill, Ryan, Al, Susan

var person = [{name: 'Austin', age: 21}, {name: 'Henry', age: 19},
	{name: 'Rowdy', age: 3}, {name: 'Derek', age: 3}];
console.log(person);
var namesOfPeople = person.map(function(person) {
	return person.name;
});
console.log(namesOfPeople);

// Use each to increment every person’s age: Jill is now 28, etc.
// the person objects are lost which i think is wrong result
var personAgePlusOne1 = [];
person.forEach(function(individual) {
	personAgePlusOne1.push(individual.name, individual.age + 1);
});
console.log(personAgePlusOne1);

// Use map to both increment each persons age & get back an array of just new ages: 
var personAgePlusOne = person.map(function(individual) {
	return individual.age + 1;
});
console.log(personAgePlusOne);

// Bonus (a little bit of a challenge, so skip if you’re short on time): write
// another variation that increments each person’s age & gives back an array of
// the ages before they were incremented. So now Jill is 28, but we get an array of
// 27, 35, 12, 44
var ageOfPerson = person.map(function(individual) {
	return individual.age + 1;
console.log(person);
console.log(ageOfPerson);
});
console.log(person);

// Make a few city objects that have a name and a state
// Update your array of people so that each one also has a city that they live in. 
// Ex Jill in Portland OR, Ryan in Chicago IL, Al in Portland OR, Susan in Portland ME
// Make sure that you use the same exact object when two people live in the same city
// Use map to get back the names of the cities that people live in: 
// Portland, Chicago, Portland, Portland

var city = [{name: 'Portland', state: 'Oregon'}, {name: 'Miami', state: 'Florida'}]
console.log(city);