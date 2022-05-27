const Mongoose = require('mongoose');

const MessageSchema = new Mongoose.Schema({
    fullname: String,
    telephone: String,
    message: String
});

module.exports = Mongoose.model('message', MessageSchema);