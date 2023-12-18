const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const payment_code = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    code: {
        type: String,
        required: [true, 'El código es obligatorio'],
    }
});
payment_code.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('payment_code', payment_code);