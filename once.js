/**
 *@param {function} fn -The function
 *@param {function} The resutling function
 *
 */

var once = function(fn) {
	var runOnce;
	return function() {
		if (runOnce !== true) {
			runOnce = true;
			fn();
		}
	};
};

var findTrueLove = once(function() {
  console.log("If this message prints only one time then the code is OK.");
});
findTrueLove();
findTrueLove();
