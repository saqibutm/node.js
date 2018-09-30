var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job: 'Software'};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('I am listening on 3000');
