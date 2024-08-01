var fs = require('fs');

fs.appendFile('apple.text','flying or not',function(err){
	if(err)throw err;	
	console.log('Saved!');
});