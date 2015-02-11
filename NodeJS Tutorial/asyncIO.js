var fs = require ('fs');
var lines = undefined;
function getLines(callback){
	fs.readFile(process.argv[2],function doneReading(err, fileContents){
		lines = fileContents.toString().split('\n').length - 1;
		callback();
	});
}
//console.log(lines);
function displayLines(){
	console.log(lines);
}
getLines (displayLines);