const express = require('express')
const router = express.Router();
const response = require('../../red/responses')
const controller = require('./controllers')


router.get('/', async function (req, res) {
    const getAll = await controller.getAll()
    response.success(req, res, getAll, 200)
})

router.get('/:id', async function (req, res) {
    try {
        const getOne = await controller.getOne()
        response.success(req, res, getOne, 200)
    } catch (err) {
        response.error(req, res, err, 400)
    }
})

module.exports = router;