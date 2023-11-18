const express = require('express')
const router = express.Router();
const response = require('../../red/responses')
const controller = require('./controllers')


router.get('/', function (req, res) {
    const getAll = controller.getAll()
        .then((items) => {
            response.success(req, res, items, 200)
        })

})

module.exports = router;