const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const document_invoice = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria'],
    },
    invoice: {
        type: Object
    },
    consecutive: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});
document_invoice.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('document_invoice', document_invoice);