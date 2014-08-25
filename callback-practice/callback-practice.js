var path = require('path');
var fs = require('fs');

/**
 * Read all files and call the call back when complete.
 *
 * @param {[type]} filePaths [description]
 * @param {Function} cb Called with err and files, an
 * array of file contents.
 */

var mapFiles = function(filePaths) {
	filePaths = ['./afile.txt', './bfile.txt', './cfile.txt'];
	filePaths.forEach(function(filePath) {
		console.log(filePath);
		fs.readFile(filePath, { encoding: 'utf8' }, function(err, contents) {
	 		if(err) throw err;
			console.log('contents: ' + contents);
			});
		});
	};
	mapFiles();
