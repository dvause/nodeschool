var http = require('http'),
	url = process.argv[2];

http.get(url, function callback(response) {
	response.setEncoding("utf8");
	response.on("error", console.error);
	response.on("data", console.log);
});
