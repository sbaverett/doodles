// set the person's name
// set the person's age
var person = {};
person.name = 'Austin';
person.age = 21;

// set the city's name
// set the city's state
var city = {};
city.name = 'Portland';
city.state = 'Oregon';
// add person to people
var people = [];
// add another person to people, but don't declare a new variable
people.push(person);
people.push({name: "Corolla", age: 101});
people.push({name: 'Linda', age: 54});
people.push({name: 'Henry', age: 19});
people.push({name: 'Rowdy', age: 3});
people.push({name: 'Derek', age: 3});
people.push({name: 'Steve', age: 62});
people.push({name: 'Emily', age: 10});

// declare an array named cities
var cities = [];
// add city to cities
cities.push(city);
cities.push({name: 'Baltimore', state: 'Maryland'});
cities.push({name: 'Munsie', state: 'Indiana'});
cities.push({name: 'Aberdeen', state: 'Maryland'});
cities.push({name: 'Bend', state: 'Oregon'});
cities.push({name: 'Sun Valley', state: 'Idaho'});

// iterate through cities and console.log each city
cities.forEach(function(eachCity) {
	console.log(eachCity);
});
// iterate through people and console.log each person
people.forEach(function(eachPerson) {
	console.log(eachPerson);
});
var names = ['sam', 'adam', 'grant', 'tian'];
// iterate through names and console.log each name
names.forEach(function(eachName) {
	console.log(eachName);
});

// iterate through people and console.log each person's name
people.forEach(function(eachPerson) {
	console.log(eachPerson.name);
});
// iterate through cities and console.log each city's name
cities.forEach(function(eachCity) {
	console.log(eachCity.name);
});
// somehow make a new array, cityNames, that's each city's name
var cityNames = [];
cities.forEach(function(aCity) {
	cityNames.push(aCity.name);
});
console.log(cityNames);
// somehow make a new array, peopleNames, that's each person's name
var peopleNames = [];
people.forEach(function(aPerson) {
	peopleNames.push(aPerson.name);
});
console.log(peopleNames);
// somehow make a new array, cityStates, that's each city's state
var cityStates = [];
cities.forEach(function(aCity) {
	cityStates.push(aCity.state);
});
console.log(cityStates);
// somehow make a new array, peopleAges, that's each person's age
var peopleAges = [];
people.forEach(function(aPerson) {
	peopleAges.push(aPerson.age);
});
console.log(peopleAges);
// find the person from the array people with the name "Sam"
var steve;
people.forEach(function(aPerson) {
	if (aPerson.name === 'Steve')
	steve = aPerson;
});
console.log(steve);
// find the city from the array cities with the state "Oregon"
var cityInOregon;
cities.forEach(function(aCity) {
	if (aCity.state === 'Oregon')
		cityInOregon = aCity;
});
console.log(cityInOregon);
// find all people who are younger than 50
var youngPerson = [];
people.forEach(function(aPerson) {
	if (aPerson.age < 50)
		youngPerson.push(aPerson);
});
console.log(youngPerson);

// find all cities that are in the state "Maryland"
var allCitiesInMaryland = [];
cities.forEach(function(aCity) {
	if (aCity.state === 'Maryland')
		allCitiesInMaryland.push(aCity);
});
console.log(allCitiesInMaryland);

// find the names of all of the people who are younger than 50 with filter & map
var youngPerson1 = people
	.filter(function(aPerson) {
		return aPerson.age < 50;
	})
	.map(function(aPerson) {
		return aPerson.name;
});
console.log(youngPerson1);
// find the names of all of the cities that are in "Maryland" with filter & map
var allCitiesInMaryland1 = cities
	.filter(function(aCity) {
		return aCity.state === "Maryland";
	})
	.map(function(aCity) {
		return aCity.name;
});
	console.log(allCitiesInMaryland1);