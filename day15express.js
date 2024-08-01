var express = require('express');
var app =  express();

app.get('/nagalakshmi',function(req,res){
	res.send("welcome to express js world tested by balaji");
});
app.listen(3000);