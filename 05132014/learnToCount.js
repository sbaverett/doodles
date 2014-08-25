var sayNumber = function(person, n) {
  console.log(person.name + " says " + n + ".");
};

var continueCounting = function(person, n) {
  sayNumber(person, n);
  if (n < 10) {
  continueCounting(person, n+1);
  }
};

var startCounting = function(person) {	
	sayNumber(person, 1);
	continueCounting(person, 2);
};

startCounting({ name: "Sam" });
