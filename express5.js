var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.get('/myway',function(req,res){
	res.render('third1');
});

app.listen(3000);