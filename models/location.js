const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const location = new mongoose.Schema({
    parent: {
        type: String,
        required: [true, 'El padre es necesario']
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'El nombre es necesario']
    },
    code: {
        type: String,
        unique: true,
        required: [true, 'El código es necesario']
    }
});
location.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('location', location);