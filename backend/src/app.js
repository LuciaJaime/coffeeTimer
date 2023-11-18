const express = require('express')
const config = require('./config.js')
const app = express();
const customers = require('./modules/employees/routes.js')

//Config
app.set('port', config.app.port)


//Routes
app.use('/api/employees', customers)


module.exports = app;