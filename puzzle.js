var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
// console.log(puzzle);
puzzle = puzzle.split('');

// console.log(puzzle);

var chunk = puzzle.slice(0, 9);
console.log('%j', chunk);
// var column = [0, 1];

var defineColumn = function(column) {
	var column = 0;
  var resultingArray = [];
  var counter = 0;
  var number = column;
  var continueDefining = function(number, counter) {
    number = number + 9;
      if (counter < 8) {
        resultingArray.push(number);
        continueDefining(number, counter + 1);
      }
  };
  var startDefining = function(column) {
    resultingArray.push(column);
    continueDefining(column, 0);
  };
  startDefining(column);
  return resultingArray;
};

defineColumn(); 
console.log(resultingArray);
