const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const resolution = new mongoose.Schema({
    resolutionKey: {
        type: String,
        unique: true,
        required: [true, 'La llave de la resolución es obligatoria']
    },
    resolutionPrefix: {
        type: String,
        unique: true,
        required: [true, 'El prefijo es obligatorio']
    },
    resolutionNumber: {
        type: String,
        unique: true,
        required: [true, 'El número es obligatorio']
    },
    resolutionrRangeInitial: {
        type: String,
        required: [true, 'El rango incial es obligatorio']
    },
    resolutionRangeFinal: {
        type: String,
        required: [true, 'El rango final es obligatorio']
    },
    resolutionValidFrom: {
        type: Date,
        required: [true, 'El resolutionValidFrom es obligatorio'],
    },
    resolutionValidUntil: {
        type: Date,
        required: [true, 'El resolutionValidFrom es obligatorio'],
    },
    state: {
        type: String,
        required: [true, 'El estado es obligatorio'],
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria'],
    }
});
resolution.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('resolution', resolution);