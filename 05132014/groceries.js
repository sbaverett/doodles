//Prints statements regarding fruit to purchase 
var indicateFruitThatNeedsPurchasing = function(fruit) {
 console.log('I need to purchase ' + fruit);
};
//Prints statements regarding fruit already purchased
var indicateFruitThatHasBeenPurchased = function(fruit) {
  console.log('I purchased ' + fruit + ' today.')
};

//If (fruits[n]) is not undefined continue on to indicate needed fruit... 
//I don't remember why this function has two parameters
var continueIndicatingFruitThatNeedsPurchasing = function(fruits, n) {
  if (fruits[n] !== undefined) {
    indicateFruitThatNeedsPurchasing(fruits[n]);
    continueIndicatingFruitThatNeedsPurchasing(fruits, n+1);
  }
};

var startIndicatingFruitThatNeedsPurchasing = function(fruits) {
  indicateFruitThatNeedsPurchasing(fruits[0]);
  continueIndicatingFruitThatNeedsPurchasing(fruits, 1);
};

//If (fruits[n]) is not undefined continue on to indicate purchased fruit... 
var continueIndicatingFruitThatHasBeenPurchased = function(purchased, n) {
  if (purchased[n] !== undefined) {
    indicateFruitThatHasBeenPurchased(purchased[n]);
    continueIndicatingFruitThatHasBeenPurchased(purchased, n+1);
  }
};

var startIndicatingFruitThatHasBeenPurchased = function(purchased) {
  indicateFruitThatHasBeenPurchased(purchased[0]);
  continueIndicatingFruitThatHasBeenPurchased(purchased, 1);
};

var fruits = [
  'apples',
  'oranges',
  'bananas',
  'kiwi'
];

var purchased = [
  'apples',
  'oranges',
  'bananas',
  'kiwi'
  
];

startIndicatingFruitThatNeedsPurchasing(fruits);
startIndicatingFruitThatHasBeenPurchased(purchased);


