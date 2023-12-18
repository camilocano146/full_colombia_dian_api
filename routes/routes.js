var express = require('express');
var router = express.Router();
const validateInvoice = require('../validation/invoiceJoi'); // Asegúrate de usar la ruta correcta
var invoiceController = require('../controllers/invoiceController');
//var notecController = require('../controllers/notecController');
//var notedController = require('../controllers/notedController');
//var companyController = require('../controllers/companyController');

/**
 * Envía facturas a DIAN
 */
router.post('/document/invoice/testing',[validateInvoice],invoiceController.invoiceTesting);
/*
router.post('/document/invoice/habilitation', invoiceController.invoiceHabilitation);
router.post('/document/invoice/production', invoiceController.invoiceProduction);
*/

/**
 * Envía notas credito a DIAN
 
router.post('/document/notec/testing', notecController.notecTesting);
router.post('/document/notec/habilitation', notecController.notecHabilitation);
router.post('/document/notec/production', notecController.notecProduction);

/**
 * Envía notas debito a DIAN

router.post('/document/noted/testing', notedController.notedTesting);
router.post('/document/noted/habilitation', notedController.notedHabilitation);
router.post('/document/noted/production', notedController.notedProduction);

/**
 * Administra empresas
 
router.post('/company/', companyController.createCompany);
router.get('/company/:id', companyController.getCompanyById);
router.list('/company/', companyController.listCompany);
router.update('/company/:id', companyController.updateCompany);
*/
module.exports = router;





/**
 * 
 * 
 * 


 * 
 * 
 * 
 */




