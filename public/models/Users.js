const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({
    username : String,
    password : String
});

module.exports = Mongoose.model('user', UserSchema);