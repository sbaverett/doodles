var x = 0;
var foo = function(x) {
  var bar = function(x) {
    return x;
  };
  return bar(x);
};
console.log(foo(x));