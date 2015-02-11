var path = process.argv[2];
var fs = require('fs');
var str = fs.readFileSync(path).toString();
var res = str.split('\n');
var lines = res.length-1;
console.log(lines);