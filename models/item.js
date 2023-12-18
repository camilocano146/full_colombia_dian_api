const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const item = new mongoose.Schema({
    standardCode: {
        type: String,
    },
    standardType: {
        type: String,
        enum: ['001', '010', '020', '999']
    },
    itemCode: {
        type: String,
        required: [true, 'El código es obligatorio']
    },
    itemName: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    itemModel: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    brandName: {
        type: String,
    },
    itemCodeSupplier: {
        type: String,
    },
    isPresent: {
        type: Number,
        required: [true, 'El present es obligatorio']
    },
    unitMeasurementCode: {
        type: String,
    },
    unitMeasurementName: {
        type: String,
    },
    price: {
        type: Float,
        required: [true, 'El precio es obligatorio'],
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria']
    },
    withholdings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "withholding",
    }],
    taxes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tax",
    }],
    charges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "charge",
    }],
    discounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "discount",
    }]
});
item.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('item', item);