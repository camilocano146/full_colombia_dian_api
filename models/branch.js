const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const branch = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'El Titulo es obligatorio']
    },
    address: {
        type: String,
        required: [true, 'La dirección es obligatorio']
    },
    phone: {
        type: String,
        required: [true, 'El telefono es obligatorio']
    },
    ubication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ubication",
        required: [true, 'La ubicación es obligatoria'],
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria'],
    }
});
branch.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('branch', branch);