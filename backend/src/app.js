const express = require('express')
const config = require('./config.js')
const app = express();
const customers = require('./modules/employees/routes.js')
const morgan = require('morgan')

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Config
app.set('port', config.app.port)

//Routes
app.use('/api/employees', customers)


module.exports = app;