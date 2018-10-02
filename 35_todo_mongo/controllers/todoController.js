var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database

mongoose.connect('mongodb://test:saqibali1@ds113870.mlab.com:13870/mongo')


// Create a scheme - this is a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var itemOne = Todo({item: 'buy flowers for me'}).save(function(err){
    if (err) throw err;
    console.log('item saved');
})

var data = [{item: 'get milk'}, {item: 'get bread'}, {item: 'get books'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports =  function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});

    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);

    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);

    });
};
