const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const charge = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'El Titulo es obligatorio']
    },
    type: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
        enum: ['V', 'P']
    },
    rate: {
        type: Float,
        required: [true, 'El rate es obligatorio']
    },
    amount: {
        type: Float,
        required: [true, 'El descuento es obligatorio']
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria'],
    }
});
charge.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('charge', charge);