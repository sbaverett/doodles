
var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
puzzle = puzzle.split('');
console.log(puzzle);

var row0 = [];
row0 = puzzle.slice(0, 9);
console.log('row 0: ' + row0);

var row1 = puzzle.slice(9, 18);
console.log('row 1: ' + row1);

row2 = puzzle.slice(18, 27);
console.log('row 2: ' + row2);

var b0 = row0.slice(0, 3);
var b1 = row1.slice(0, 3);
var b2 = row2.slice(0, 3);
console.log(b0 + 'x' + b1 + 'x' + b2);
var box0 = b0 + b1 + b2;
console.log('box0:  ' + box0);


module.exports.checkRow = function(puzzle, row, comparedNumber){
var result = false;

var x = (row*9);
row = puzzle.slice(row, (row + 9));
	//console.log("+%j+", row1);
	row.forEach(function(number) {
		number = parseInt(number);
	//	console.log(number);
		if (number === comparedNumber) {
			result = true;
		}
	});
	return result;
};

module.exports.checkBox = function(puzzle, box, comparedNumber) {
var result = false;
var x = 0;
var y = 9;
var z = 18;

x = ((box*3) + x);
y = ((box*3) + y);
z = ((box*3) + z);

// var xString = puzzle.substr(x, 3);
// var yString = puzzle.substr(y, 3);
// var zString = puzzle.substr(z, 3);



boxContents = xString+yString+zString;

//console.log(boxContents);

//console.log("+%j+", boxContents1);
boxContents.forEach(function(number) {
  number = parseInt(number);
//  console.log(number);
  if (number === comparedNumber) {
    result = true;
  }
});
return result;

};