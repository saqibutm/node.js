var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database

mongoose.connect('mongodb://test:saqibali1@ds113870.mlab.com:13870/mongo')


// Create a scheme - this is a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

// var data = [{item: 'get milk'}, {item: 'get bread'}, {item: 'get books'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports =  function(app){

    app.get('/todo', function(req, res){
        // get data from the mongodb and pass to the view
        Todo.find({}, function(err,data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });

    });

    app.post('/todo', urlencodedParser, function(req, res){
        // get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);

        });

    });

    app.delete('/todo/:item', function(req, res) {
        // delete the requested item from the mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

};
