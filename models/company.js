const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const company = new mongoose.Schema({
    name: {
        type: String
    },
    softwareId: { // token para  la api de aliado api-key
        type: String,
        // unique: true,
        required: [true, 'El token es obligatorio']
    },
    testSetId: {
        type: String,
        // unique: true,
        required: [true, 'El testid es obligatorio']
    },
    identification: {
        type: String,
        unique: true,
        required: [true, 'La identificación es obligatoria']
    },
    integration_type: {
        type: String,
        // required: [true, 'El tipo de integración es obligatorio']
    },
    digitCheck: {
        type: String,
        required: [true, 'El digito de chequeo es obligatorio']
    },
    identificationTypeCode: {
        type: String,
        // required: [true, 'El tipo de identificación es obligatorio'],
        enum: ['11', '12', '13', '21', '22', '31', '41', '42', '50', '91']
    },
    postal_code: {
        type: String
    },
    address: {
        type: String,
        // required: [true, 'La dirección es obligatoria'],
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "location",
        // required: [true, 'La ubicación es obligatoria'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    count_invoice: {
        type: Number,
        default: 0
    },
    count_credit_notes: {
        type: Number,
        default: 0
    },
    count_debit_notes: {
        type: Number,
        default: 0
    },
    mode: {
        type: String,
        enum: ['test', 'habilitation', 'production']
    }
});
company.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('company', company);