const Joi = require('joi');


// esquema para validar descuentos
const discountSchema = Joi.object({
    name: Joi.string().max(40).required(),
    type: Joi.string().max(1).required(),
    rate: Joi.number().required(),
    amount: Joi.number().required()
});

// esquema para validar de impuestos y retenciones
const taxWithholdingSchema = Joi.object({
    name: Joi.string().max(64).required(),
    code: Joi.string().max(8).required(),
    type: Joi.string().max(1).required(),
    rate: Joi.number().required(),
    amount: Joi.number().required()
});

// esquemas para validar recargos
const changeSchema = Joi.object({
    name: Joi.string().max(40).required(),
    type: Joi.string().max(1).required(),
    rate: Joi.number().required(),
    amount: Joi.number().required()
});

// esquema de item de factura electronica
const itemSchema = Joi.object({
    itemCode: Joi.string().max(32).required(),
    itemName: Joi.string().max(200).required(),
    isPresent: Joi.boolean().required(),
    description: Joi.string().max(1024).required(),
    unitMeasurementCode: Joi.string().max(4).required(),
    price: Joi.number().required(),
    quantity: Joi.number().integer().required(),
    discounts: Joi.array().items(discountSchema),
    withholdings:Joi.array().items(taxWithholdingSchema),
    taxes:Joi.array().items(taxWithholdingSchema),
    charges:Joi.array().items(changeSchema)
});

// esquema de factura electronica
const invoiceSchema = Joi.object({
    // valida que el objeto tenga las propiedades principales de la factura 
    consecutive: Joi.number().integer().min(1).required(),
    observation: Joi.string().max(800).allow(''),
    date: Joi.date().iso().required(),
    payment_code: Joi.string().max(4).required(),

    // valida que el objeto tenga la propiedad "company" junto a nit y digito de verificaicon
    company: Joi.object({
        nit: Joi.string().pattern(/^[0-9]+$/).max(15).required(), // Asume que NIT tiene 9 dígitos
        digit_check: Joi.string().max(3).pattern(/^[0-9]$/).required() // Asume que el dígito de verificación es un único dígito numérico
    }).required(),

    // valida que el objeto tenga la propiedad "resolution" junto a los datos de la misma para la facturacion
    resolution: Joi.object({
        resolution_key: Joi.string().hex().length(40).required(), // Asume que es una clave hexadecimal de 40 caracteres
        resolution_prefix: Joi.string().max(10).required(), // Asume que es un string alfanumérico de máximo 10 caracteres
        resolution_number: Joi.number().integer().min(6).required(), // Asume que es un número entero positivo
        resolution_range_initial: Joi.number().integer().min(1).required(), // Asume que es un número entero positivo
        resolution_range_final: Joi.number().integer().min(Joi.ref('resolution_range_initial')).required(), // Asume que es un número entero y no menor que resolutionRangeInitial
        resolution_valid_from: Joi.date().iso().required(), // Fecha en formato ISO
        resolution_valid_until: Joi.date().iso().greater(Joi.ref('resolution_valid_from')).required() // Fecha en formato ISO y posterior a resolutionValidFrom
    }).required(),

    // valida que el objeto tenga la propiedad "customer" junto a los datos del cliente
    customer:Joi.object({
        name: Joi.string().max(128).required(),
        person_type: Joi.string().max(2).required(),
        document: Joi.string().max(24).required(),
        digit_check: Joi.string().max(2).required(),
        type_document: Joi.string().max(4).required(),
        address: Joi.string().max(128).required(),
        email:Joi.string().max(160).required(),
        country_name: Joi.string().max(48).required(),
        country_code: Joi.string().max(8).required(),
        region_name: Joi.string().max(48).required(),
        region_code: Joi.string().max(8).required(),
        city_name:  Joi.string().max(48).required(),
        city_code:  Joi.string().max(8).required(),
        postal_code:  Joi.string().max(16).required()
    }).required(),

    items: Joi.array().items(itemSchema).min(1).required(),

    // valida totales de la factura
    total_value: Joi.number().required(),
    iva: Joi.number().required(),


    /*
    
    */


    /*
    emailSender: Joi.string().length(128).email().allow(''), // Permite correos válidos o un string vacío
    consecutive: Joi.string().integer().required(),
    externalNumber: Joi.string().max(42), // Permite string vacío
    currencyCode: Joi.string().length(3).required(),
    currencyRate: Joi.number().min(0).required(), // Asume que la tasa de cambio no puede ser negativa
    date: Joi.date().iso().required(),
    dateDue: Joi.date().iso(), // La fecha de vencimiento debe ser posterior a la fecha de la factura
    dateStart: Joi.date().iso(),
    dateEnd: Joi.date().iso(), // La fecha final debe ser posterior a la fecha de inicio
    typeOfOperation: Joi.string().length(2).required(),
    incoterms: Joi.string().length(3),
    deliveryTerms: Joi.string().max(800).allow(''),
    terms: Joi.string().max(800).allow(''),
    remark: Joi.string().max(800).allow(''),
    observation: Joi.string().max(800).allow(''),
    termDay: Joi.number().integer().min(0),
    payment_code: Joi.string().max(8),
    */
});

// Middleware para validar
const validateInvoice = (req, res, next) => {
    const { error } = invoiceSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details);
    }
    next(); // Continúa con el siguiente middleware si no hay error
};

module.exports = validateInvoice;