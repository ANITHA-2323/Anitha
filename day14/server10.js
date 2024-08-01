var fs = require('fs');

fs.unlink('banana.text',function(err){
	if(err)throw err;	
	console.log('File deleted!');
});