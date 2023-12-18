'use strict';
const serverless_http = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

var port = process.env.PORT || 3000;

//Config
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true
}));
app.use(bodyParser.json({ limit: "50mb" }));
//Rutas
var routes = require('./routes/routes');
app.use('/', routes);

module.exports.generic = serverless_http(app);
