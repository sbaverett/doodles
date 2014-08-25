var person = {};
person.name = 'austin';
person.age = 21;

var city = {};
city.name = 'Portland';
city.state = 'Oregon';
		
var people = [];	

// add person to people
	
people.push(person);
people.push({name: 'Linda', age: 54});
people.push({name: 'Linda', age: 54});
people.push({name: 'Austin', age: 21});
people.push({name: 'Henry', age:19});
people.push({name: 'Rowdy', age: 3});
people.push({name: 'Derek', age: 3});
people.push({name: 'Fred', age: 65});
people.push({name: 'Fred', age: 73});
people.push({name: 'Nancy', age: 52});
people.push({name: 'Boots', age: 72});
people.push({name: 'Conor', age: 30});
people.push({name: 'Aimee', age: 44});
people.push({name: 'John', age: 46});
people.push({name: 'Ian', age: 27});
people.push({name: 'Kathryn', age: 67});
people.push({name: 'Tom', age: 52});
people.push({name: 'Steve', age: 61});
people.push({name: 'Rachael', age: 52});
people.push({name: 'Patty', age: 55});
people.push({name: 'Tony', age: 21});

// declare an array named cities
var cities = [];
cities.push(city);
// add city to cities
cities.push({name: 'Miami', state: 'Florida'});
cities.push({name: 'Seattle', state: "Washington"});
cities.push({name: 'San Francisco', state: 'California'});
cities.push({name: 'Pittsburg', state: 'Pensylvania'});
cities.push({name: 'Baltimore', state: 'Maryland'});
cities.push({name: 'New Orleans', state: 'Lousiana'});

// console.log(city);
// iterate through cities and console.log each city
cities.forEach(function(oneOfTheCities) {
	console.log(oneOfTheCities);
});
// iterate through people and console.log each person
people.forEach(function(oneOfThePeople) {
	console.log(oneOfThePeople);
});

var names = ['sam', 'adam', 'grant', 'tian'];
// iterate through names and console.log each name
names.forEach(function(oneOfTheNames) {
	console.log(oneOfTheNames);
});
// iterate through people and console.log each person's name
people.forEach(function(aPerson) {
	console.log(aPerson.name);
});

// iterate through cities and console.log each city's name
cities.forEach(function(aCity) {
	console.log(aCity.name);
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


// somehow make a new array, cityNames, that's each city's name
var cityNames1 = cities.map(function(aCity) {
	return aCity.name;
});
console.log(cityNames1);

// somehow make a new array, peopleNames, that's each person's name
var peopleNames1 = people.map(function(aPerson) {
	return aPerson.name;
});
console.log(peopleNames1);

// somehow make a new array, cityStates, that's each city's state
var cityStates1 = cities.map(function(aCity) {
	return aCity.state;
});
console.log(cityStates1);

// somehow make a new array, peopleAges, that's each person's age
var peopleAges1 = people.map(function(aPerson) {
	return aPerson.age;
});
console.log(peopleAges1);

// find the person from the array people with the name "Sam"
var steve;
people.forEach(function(aPerson) {
	if (aPerson.name === 'Steve') {
		steve = aPerson;
	}
});
console.log(steve);

// find the city from the array cities with the state "Oregon"
var cityInOregon;
cities.forEach(function(aCity) {
	if (aCity.state.toLowerCase() === 'oregon') {
		cityInOregon = aCity;
	}
});
console.log(cityInOregon);

// find all people who are younger than 50
var youngPeople = [];
people.forEach(function(aPerson) {
	if (aPerson.age < 50) {
		youngPeople.push(aPerson); 
	}
});
console.log(youngPeople);

// find all cities that are in the state "Maryland"
var citiesInMaryland = [];
cities.forEach(function(aCity) {
	if (aCity.state === 'Maryland') {
		citiesInMaryland.push (aCity);
	}
});
console.log(citiesInMaryland);

// find all people who are younger than 50
var youngPeople1 = people.filter(function(aPerson) {
	return aPerson.age < 50;
})
console.log(youngPeople1);

// find all cities that are in the state "Maryland"
var citiesInMaryland1 = cities.filter(function(aCity) {
	return aCity.state === 'Maryland';
})
console.log(citiesInMaryland1);

// find the names of all of the people who are younger than 50 with filter & map
var namesOfYoungPeople = people
	.filter(function(aPerson) {
		return aPerson.age < 50;
	})
	.map(function(aPerson) {
		return aPerson.name;	
	});
console.log(namesOfYoungPeople); 

// find the names of all of the cities that are in "Maryland" with filter & map
var namesOfCitiesInMaryland = cities
	.filter(function(aCity) {
		return aCity.state === 'Maryland';
	})
	.map(function(aCity) {
		return aCity.name;
	});
console.log(namesOfCitiesInMaryland);
