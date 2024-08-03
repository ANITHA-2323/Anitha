var express = require('express');
var app = express();

app.get('/:anitha',function(req,res){
	res.send('The id you specified is' + req.params.id);
});
app.listen(4000);