var array = [];
for(var n = -50; n <= 50; n++) {
  array.push(n);
};
var fizz = array.map(function(n) {
  if (n%3 == 0 && n%5 == 0)
    return 'fizzBuzz'
  if(n%3 == 0)
    return 'fizz';
  if(n%5 == 0)
    return 'buzz';
    else return n;
});
console.log(fizz);

//Whitney suggested the following changes to my solution
// var string = '';
// for (var n = -50 ; n <= 50; n++) {
//   if (n % 3 == 0 && n % 5 == 0) { string += 'fizzBuzz'; }
//   else if (n % 3 == 0) { string += 'fizz'; }
//   else if (n % 5 == 0) { string += 'buzz'; }
//   else { string += n; }   
// };
// console.log(string);
