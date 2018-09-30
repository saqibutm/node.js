var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data) {
    console.log(data);
});

console.log('Test');


