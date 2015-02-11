var fs = require ('fs');
var extension = process.argv[3];
fs.readdir(process.argv[2],function callback(err, list){
	for (var i = 0;i < list.length; i++){
		var str = list[i].split('.');
		if(str[1] == extension){
			console.log(list[i]);
		}
	}
});