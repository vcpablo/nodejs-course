var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        // Seed database
        var startTodos = [
            { 
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false 
            },
            { 
                username: 'test',
                todo: 'Feed Dog',
                isDone: false,
                hasAttachment: false 
            },
            { 
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false 
            }
        ];

        Todos.create(startTodos, function(err, results) {
            res.send(results);
        });
    });
}