const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var Float = require('mongoose-float').loadType(mongoose);

const withholding = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'El Titulo es obligatorio']
    },
    code: {
        type: String,
        required: [true, 'El código es obligatorio'],
        enum: ['01', '02', '03', '04', '05', '06', '07', '08', '20', '21', '22', '23', '24', '25', '26', 'zz']
    },
    type: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
        enum: ['F', 'P', 'M']
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
withholding.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('withholding', withholding);