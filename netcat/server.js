var path = require('path');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function(request, respond) {
	console.log(request.cookies);
	respond.cookie("time", Date.now());
	var difference = Date.now() - request.cookies['time'];
	console.log('last request was %d seconds ago', difference / 1000);
	//server code related to cookies
	respond.sendfile(path.join(__dirname, 'public/index.html'));
});
app.listen(9000);