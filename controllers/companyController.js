const companyService = require('../services/companyService');

exports.create = async(req, res) => {
    await companyService.create(req.body, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    })
}

exports.list = async(req, res) => {
    await companyService.list(req.body, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    })
}

exports.getById = async(req, res) => {
    await companyService.getById(req.body, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    })
}

exports.update = async(req, res) => {
    await companyService.update(req.body, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    })
}