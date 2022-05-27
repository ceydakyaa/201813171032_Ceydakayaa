const User = require('../models/Users');
const Message = require('../models/Message');

const login = (data) => {
    const user = new User(data);
    return user.save();
}

const sendMessage = (data) => {
    const message = new Message(data);
    return message.save();
}

module.exports = {
    login,
    sendMessage
}