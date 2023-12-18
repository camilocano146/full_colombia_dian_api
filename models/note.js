const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const note = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },
    concept: {
        type: String,
        required: [true, 'El concepto es obligatorio'],
    },
    invoicePrefix: {
        type: String,
        required: [true, 'El invoicePrefix es obligatorio']
    },
    consecutive: {
        type: Number,
        required: [true, 'El consecutivo es obligatorio']
    },
    invoiceCufe: {
        type: String,
        required: [true, 'El invoiceCufe es obligatorio']
    },
    invoiceDate: {
        type: Date,
        required: [true, 'El invoiceDate es obligatorio']
    },
    typeOfOperation: {
        type: String,
        enum: ['10', '09', '11']
    },
    item_note: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        },
        quantity: {
            type: Number
        }
    }],
    discount_note: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "discount"
    }],
    charge_note: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "charge"
    }]
});
note.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('note', note);