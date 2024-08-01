var express = require('express');
var app = express();

app.get('/home',function(req,res){
	res.send("welcome to home page")
});
app.post('/contact',function(req,res){
	res.send("called the post method at'/conect'!\n")
});
app.all('/test',function(req,res){
	res.send("HTTP method doesn't have any effect on the route!")
});
app.listen(8000);