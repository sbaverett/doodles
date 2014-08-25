// Break into multiple files. 
// Add additional functions.
// Figure out why name is not working at 103.

function Fruit() {
  this._edible = true;
  this._compostable = true;
}

Fruit.prototype.edible = function() { return this._edible; };
Fruit.prototype.compostable = function() { return this._compostable; };
Fruit.prototype.genus = function() { return this._genus; };
Fruit.prototype.epicarp = function() { return this._epicarp; };
Fruit.prototype.mesocarp = function() { return this._mesocarp; };
Fruit.prototype.endocarp = function() { return this._endocarp; };
Fruit.prototype.calories = function() { return this._calories; };
Fruit.prototype.setCalories = function(calories) { this._calories = calories; };
Fruit.prototype.color = function() { return this._color; };
Fruit.prototype.setColor = function(color) { this._color = color; };

function Apple() {
  Fruit.prototype.constructor.call(this);
}
Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.constructor = Apple;

Apple.prototype.core = function() {
  console.log('The red apple is being cored.');
};
Apple.prototype.slice = function() {
  console.log('The red apple is being sliced.');
};

Apple.prototype.prepareForEating = function() {
  var safe = true
  if (safe) {
    this.core();
    this.slice();
  };
};

function Banana() {
  Fruit.prototype.constructor.call(this);
}
Banana.prototype = Object.create(Fruit.prototype);
Banana.prototype.constructor = Banana;

Banana.prototype.peel = function() {
  console.log('The yellow banana is being peeled.');
};

function Nightshade() {
  Fruit.prototype.constructor.call(this);
  this._edible = false;
}
Nightshade.prototype = Object.create(Fruit.prototype);
Nightshade.prototype.constructor = Nightshade;


var banana = new Banana();
// console.log(banana.edible());

var apple = new Apple();
// console.log(apple.edible());

var nightshade = new Nightshade();
// console.log(nightshade.edible());


Fruit.prototype.isRotten = function() {
  return this._isRotten;
};

Fruit.prototype.setRotten = function(value) {
  this._isRotten = value
}
Fruit.prototype.hasMold = function() {
  return this._hasMold;
};

Fruit.prototype.setHasMold = function(value) {
  this._hasMold = value;
}

Fruit.prototype.prepareForEating = function() {
  var safe = true;
  if (this.isRotten()) { safe = false; }
  else if (this.hasMold()) { safe = false; }
  return safe;
};

function Person (name) {
  this._name = name;
  this._intelligence = 5;
}

Person.prototype.getIntelligence = function() { return this._intelligence; };
Person.prototype.setIntellegence = function(intelligence) { this._intelligence = intelligence;};
Person.prototype.getName = function() { return this._name; };
Person.prototype.setName = function(name) { this._name = name };
Person.prototype.eat = function(fruit) {
  var isPrepared = fruit.prepareForEating();
  console.log(this._name);
};

var person = new Person('John');
var apple1 = new Apple();
person.eat(apple1); // John is slicing the red apple, eating the red apple

var banana1 = new Banana();
person.eat(banana1); // John is peeling the yellow banana, eating the yellow banana

var banana2 = new Banana();
banana2.setRotten(true);
person.eat(banana2); // John is peeling the yellow banana, composting the rotten banana

var apple2 = new Apple();
apple2.setHasMold(true);
person.eat(apple2); // John is slicing the red apple, composting the moldy apple

var nightshade1 = new Nightshade();
person.eat(nightshade); // John eats the poisonous fruit and dies.

debugger;

var person2 = new Person('Alice');
person2.setIntellegence(10);
person2.eat(nightshade); // Alice is wise and discards the poisonous fruit.

