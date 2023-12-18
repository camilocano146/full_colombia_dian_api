const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const customer = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    personType: {
        type: String,
        required: [true, 'El tipo de persona es obligatorio'],
        enum: ['1', '2']
    },
    regimeType: {
        type: String,
        required: [true, 'El regimen es obligatorio'],
        enum: ['48', '49']
    },
    firstName: {
        type: String,
        required: [true, 'El nombre de integración es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'El apellido de chequeo es obligatorio']
    },
    identification: {
        type: String,
        required: [true, 'La identificación es obligatoria'],
    },
    digitCheck: {
        type: String,
        required: [true, 'El digito de chequeo es obligatoria'],
    },
    identificationTypeCode: {
        type: String,
        required: [true, 'El tipo de identificación es obligatorio'],
        enum: ['11', '12', '13', '21', '22', '31', '41', '42', '50', '91']
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    merchantRegistration: {
        type: String,
    },
    responsabilities: {
        type: String,
        required: [true, 'La responsabilidad es obligatoria'],
        enum: ['O-13', 'O-15', 'O-23', 'O-47', 'R-99-PN']
    },
    billing_ubication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ubication",
        required: [true, 'La ubicación es obligatoria'],
    },
    billingAddress: {
        type: String,
    },
    billingPostalCode: {
        type: String,
        required: [true, 'El código postal es obligatorio'],
    },
    billingNeighborhood: {
        type: String,
    },
    billingContactName: {
        type: String,
    },
    shipping_ubication: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ubication"
    },
    shippingAddress: {
        type: String,
    },
    shippingPostalCode: {
        type: String,
    },
    shippingNeighborhood: {
        type: String,
    },
    shippingPhone: {
        type: String,
    },
    shippingContactName: {
        type: String,
    }
});
customer.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('customer', customer);