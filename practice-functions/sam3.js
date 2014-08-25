var person = {
	name: "Linda",
	age: 54		
};
// set the person's name
// set the person's age

var city = {
	name: 'Portland',
	state: "Oregon"
};
// set the city's name
// set the city's state

var people = [];

// add person to people
people.push(person);
people.push({name: 'Austin', age: 22});
people.push({name: 'Henry', age: 20});
people.push({name: 'Rowdy', age: 3});
people.push({name: 'Derek', age: 3});

console.log(people);


var cities = [];
cities.push(city);
cities.push({name: 'Baltimore', state: 'Maryland'});
cities.push({name: 'San Francisco', state: 'California'});
cities.push({name: 'Lakeside', state: 'California'});

// declare an array named cities
// add city to cities

cities.forEach(function(aCity) {
	console.log(aCity);
});

// iterate through cities and console.log each city

people.forEach(function(aPerson) {
	console.log(aPerson);
});

// iterate through people and console.log each person

var names = ['sam', 'adam', 'grant', 'tian'];
names.forEach(function(eachName) {
	console.log(eachName);
});
// iterate through names and console.log each name

people.forEach(function(aPerson) {
	console.log(aPerson.name);
});

// iterate through people and console.log each person's name

cities.forEach(function(cityName) {
	// console.log(cityName.name);
});
// iterate through cities and console.log each city's name

var cityNames = cities.map(function(eachCity) {
	return eachCity.name;	
});
console.log(cityNames);

// somehow make a new array, cityNames, that's each city's name
// somehow make a new array, peopleNames, that's each person's name
// somehow make a new array, cityStates, that's each city's state
// somehow make a new array, peopleAges, that's each person's age

	
// find the person from the array people with the name "Sam"

// find the city from the array cities with the state "Oregon"
var youngPeople = [];
people.forEach(function(aPerson) {
	if(aPerson.age < 21)
		youngPeople.push(aPerson);
});
console.log(youngPeople);
// find all people who are younger than 50

var citiesInCalifornia = [];
cities.forEach(function(aCity) {
	if(aCity.state === 'California')
		citiesInCalifornia.push(aCity.name);
});
console.log(citiesInCalifornia);

// find all cities that are in the state "Maryland"
