var fs = require('fs');

fs.writeFile('apple.text','could u understand or not!',function(err){
	if(err)throw err;	
	console.log('Saved!');
});