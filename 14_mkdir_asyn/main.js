var fs = require('fs');

fs.mkdir('Stuff', function(err){
    fs.readFile('readMe.txt', 'utf8', function(err,data){
        fs.writeFile('./Stuff/writeMe.txt', data, function(){
        });
    });
});





