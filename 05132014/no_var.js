 // describeRoom is a function with parameter of "room"


 var describeRoom = function(room) {

 	console.log ("My " + room.subject + " classroom is " + room.size + ".")
 }

// function that calls an argument
 describeRoom({size: "big", subject: "JS"});
 describeRoom({size: "small", subject: "HTML"});
