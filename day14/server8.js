var fs = require('fs');

fs.rename('apple.text','banana.text',function(err){
	if(err)throw err;	
	console.log('File Renamed!');
});