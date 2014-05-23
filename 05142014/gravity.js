var timeTheDrop = function(ht) {
	var dropTime;
	grav = 9.81;
	preRoot = (2 * ht) / grav;
	dropTime = Math.pow(preRoot, 0.5);
	return dropTime;
}