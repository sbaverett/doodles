function AlarmClock(name) {
  this.name = name;
}

AlarmClock.prototype.ring = function() {
  console.log('RING RING RING!!!');
  console.log('%s!!!', this.name.toUpperCase());
  console.log('RING RING RING!!!');
};

AlarmClock.prototype.schedule = (function(date) {
	var delay = date.getTime() - Date.now();
	// console.log('schedule for %d mili-sec from now', 1000);	
	setTimeout(this.ring.bind(this), delay);
	console.log();
});

var alarmClock = new AlarmClock('wake up');
var alarmClock2 = new AlarmClock('eat lunch');

alarmClock.schedule(new Date(Date.now() + 1000));
alarmClock2.schedule(new Date(Date.now() + 3000));
console.log(new Date(Date.now() + 3000));

// alarmClock.schedule(new Date(Date.now() + 1000))