require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
let url = process.env.DATA_BASE;
//let url = 'mongodb://localhost:27017/kinero';


module.exports = connectToDatabase = () => {
    if (isConnected) {
        return Promise.resolve();
    }
    return mongoose.connect(url, options).then(db => {
        isConnected = db.connections[0].readyState;
    });
};