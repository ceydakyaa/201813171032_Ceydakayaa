const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once('open', () => {
    console.log('DB bağlantısı başarılıdır...');
});

const connectDB = async () => {
    await Mongoose.connect('mongodb://localhost/istanbul_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    connectDB,
};