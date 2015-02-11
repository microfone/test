var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, function (err, contents){
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
})