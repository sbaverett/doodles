

 var describeRoom = function(room) {
 	console.log ("My " + room.subject + " classroom is " + room.size + ".")
 }

 var thisClassroom = {size: "big", subject: "JS"};

 var otherClassroom = {size: "small", subject: "HTML"};

 describeRoom(thisClassroom);
 describeRoom(otherClassroom);
