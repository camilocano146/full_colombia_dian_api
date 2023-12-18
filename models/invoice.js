const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const invoice = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company",
        required: [true, 'La empresa es obligatoria'],
    },
    code: {
        type: String,
        required: [true, 'El código es obligatorio'],
        enum: ['01', '02', '03', '04']
    },
    format: {
        type: String,
        required: [true, 'El formato de persona es obligatorio'],
        enum: ['Estandar', 'Azul', 'Continental', 'Indigo', 'FacturaExportacion', 'MediaCarta']
    },
    emailSender: {
        type: String
    },
    consecutive: {
        type: Number,
        required: [true, 'El nombre de integración es obligatorio']
    },
    externalNumber: {
        type: String
    },
    currencyRate: {
        type: Float,
        required: [true, 'La currencyRate es obligatoria']
    },
    date: {
        type: Date,
        required: [true, 'El digito de chequeo es obligatoria'],
    },
    dateDue: {
        type: Date,
    },
    dateStart: {
        type: Date,
    },
    dateEnd: {
        type: Date,
    },
    typeOfOperation: {
        type: String,
        enum: ['10', '09', '11']
    },
    incoterms: {
        type: String,
        enum: ['CFR', 'CIF', 'CIP', 'CPT', 'DAP', 'DAT', 'DDP', 'EXW', 'FAS', 'FCA', 'FOB']
    },
    deliveryTerms: {
        type: String,
    },
    terms: {
        type: String,
    },
    cufe: {
        type: String,
    },
    remark: {
        type: String,
    },
    observation: {
        type: String,
    },
    termDay: {
        type: Number,
    },
    type_discount_charges: {
        type: Number,
        required: [true, 'La tipo descuento es obligatoria']
    },
    amount: {
        type: Number,
        required: [true, 'La cantidad es obligatoria']
    },
    prepaymentAmount: {
        type: String,
        required: [true, 'El prepaymentAmount es obligatorio']
    },
    state: {
        type: String,
        required: [true, 'El estado es obligatorio']
    },
    payment_code: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_code",
        required: [true, 'El método de apgo es obligatorio'],
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer",
        required: [true, 'El cliente es obligatorio'],
    },
    item_invoice: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item"
        },
        quantity: {
            type: Number
        }
    }],
    discounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "discount"
    }],
    charges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "charge"
    }],
    totals: {
        amount: {
            type: Float
        },
        prepaymentAmount: {
            type: Float
        },
        taxesAmount: {
            type: Float
        },
        withholdingAmount: {
            type: Float
        },
        discountsAmount: {
            type: Float
        },
        chargesAmount: {
            type: Float
        }
    }
});
invoice.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('invoice', invoice);