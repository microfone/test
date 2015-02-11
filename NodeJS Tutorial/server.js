var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
	console.log('Connection');
	var path = url.parse(request.url).pathname;
	
	switch(path){
		case '/':
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write('hello world');
			break;
		case '/socket.html':
			fs.readFile(__dirname + path,function (error, data){
				if(error){
					console.log('erro');
					response.writeHead(404);
					response.write("opps this doesn't exist");
				}
				else{
					console.log('else');
					response.writeHead(200,{'Content-Type':'text/html'});
					response.write(data,'utf8');
				}
			});
			break
		default:
			response.writeHead(404);
			response.write("opps this doesn't exist - def");
			break;
	}
	response.end();
});

server.listen(8001);

