
/*
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});// 200 is a normal request status  vs 404 
	res.end('Hello');
}).listen(1338,'127.0.0.1');
console.log("webserver started.");
*/


var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});// 200 is a normal request status  vs 404 
		res.end(data);
	});
}).listen(1337,'127.0.0.1');
console.log("webserver has started");


