var fs = require('fs');

fs.open('apple.text','W',function(err,file){
	if(err)throw err;	
	console.log('Saved!');
});