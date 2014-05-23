/**
*Iterates through an array.
*
*@function
*@param {array} array - Input array
*@param {function} fn -Function to apply to each element in the array.
*@example 

*/


module.exports.each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};