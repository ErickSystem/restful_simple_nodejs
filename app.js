var app = require('./app_config.js');
var db = require('./db_config.js');
var userController = require('./controller/user_controller.js')
var validator = require('validator')

// Routes
app.get('/', function(req, res){
    res.json({response: 'Servidor ON!'});
});

app.get('/users', function(req, res){

    userController.list(function(resp){
        res.json(resp);
    });
});

app.get('/users/:id', function(req, res){

    var id = validator.trim(validator.escape(req.params.id));
    userController.user(id, function(resp){
        res.json(resp);
    });
});

app.post('/users', function(req, res){

    var fullname = validator.trim(validator.escape(req.body.fullname));
    var email = validator.trim(validator.escape(req.body.email));
    var password = validator.trim(validator.escape(req.body.password));

    userController.save(fullname, email, password, function(resp){
        res.json(resp);
    });
    
});

app.put('/users/:id', function(req, res){
   
    var id = validator.trim(validator.escape(req.params.id));
    var fullname = validator.trim(validator.escape(req.body.fullname));
    var email = validator.trim(validator.escape(req.body.email));
    var password = validator.trim(validator.escape(req.body.password));

    userController.update(id, fullname, email, password, function(resp){
        res.json(resp);
    });
    
});

app.delete('/users/:id', function(req, res){

    var id = validator.trim(validator.escape(req.params.id));
    userController.delete(id, function(resp){
        res.json(resp);
    });
    
});
