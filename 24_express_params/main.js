var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('This is a home page');
});

app.get('/profile/:id', function(req,res){
    res.send('You requested to see the profile of ' + req.params.id);
});

app.listen(3000);
console.log('I am listening on 3000');
