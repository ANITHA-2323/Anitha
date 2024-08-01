
var balaji = require('http');
balaji.createServer(function(req,req) 
{
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Hello worlds!');
	res.end();
}).listen(5000);