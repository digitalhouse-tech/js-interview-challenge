const express = require('express')
const router = express.Router()
const models = require('../models')
const rest = require('../utils/rest')

router.get('/products', async (req, res) => {
    models.Product.findAll()
        .then(products => {
            const response = rest.success(products)
            res.status(response.code).send(response)
        })
})

module.exports = router
