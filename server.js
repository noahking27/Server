var http = require("http");
var PORT = 7000;
var PORTtwo = 7500;

function handleRequest(request, response) {

	response.end("It works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function (){
	console.log("You're a wonderful person!");
});

server.listen(PORTtwo, function (){
	console.log("You suck!");
});