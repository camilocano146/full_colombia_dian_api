
const fetch = require('node-fetch');
const connectionDB = require('../database/connection-mongodb');
const Company = require('../models/company');

exports.create = async function(body, callback) {
    connectionDB().then(() => {
        Company.create(body).then(company => {
            console.log(company);
            callback(null, { msj: 'Company Created', company: company });
            return;
        }).catch(err => {
            callback(err)
            return
        })
    }).catch(err => {
        callback(err);
        return;
    })
}