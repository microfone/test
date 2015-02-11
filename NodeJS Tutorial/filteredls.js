var path = process.argv[2];
var extension = process.argv[3];
var fs = require ('fs');
fs.readdir(path,function callback(err,list){
	for(var i = 0; i < list.length; i++){
		var str = list[i].split('.');
		if(str[1]== extension){
			console.log(list[i]);
		}
	}
});