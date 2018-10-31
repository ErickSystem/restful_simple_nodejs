// Mongoose
var db_string = 'mongodb://127.0.0.1/screencast_restful';
var mongoose = require('mongoose')
mongoose.connect(db_string, { useNewUrlParser: true })
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    created_at: Date
});

exports.User = mongoose.model('User', userSchema);
