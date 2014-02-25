var http = require('http'),
	map = require('through2-map'),
	port = process.argv[2];

var server = http.createServer(function (request, response) {
	if (request.method != 'POST') {
		response.writeHead(401);
		response.end();
	}
	request.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});
server.listen(port);
