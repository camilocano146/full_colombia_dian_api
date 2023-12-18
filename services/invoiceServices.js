
const connectionDB = require('../database/connection-mongodb');

/**
 * Recibe los datos de la factura y crea un JSON de acuerdo a la estructura que se debe enviar a Aliaddo
 * De acuerdo al nit y dígito de la empresa facturadora (recibido en el body), se busca una empresa que conincida en esta base de datos
 * para sacar el modo de operación (pruebas, habiltiación y producción), el testSetId y el key_company de esa empresa facturadora
 * @param body Datos que se reciben de la factura
 */
exports.invoiceTesting = async function(req, callback) {
    console.log('services.invoiceServices.invoiceTesting');
    connectionDB().then(() => {

        console.log(req.body);
        callback(null, { msj: 'invoice', invoice: req.body});
        
    }).catch(err => {
        console.error('Error 4:', err.message);
        return callback(err);
    });
}
