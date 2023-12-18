const invoiceService = require('../services/invoiceServices');

exports.invoiceTesting = async(req, res) => {
    console.log('controllers.invoiceController.invoiceTesting');
    await invoiceService.invoiceTesting(req, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(201).json({
            success: true,
            body: result
        })
    })
}
