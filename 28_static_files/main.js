var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job: 'Software', hobbies: ['running', 'eating', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('I am listening on 3000');
