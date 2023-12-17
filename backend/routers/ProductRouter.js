'use strict'

const express = require('express')
const productController = require('../controller/ProductController')

const router = express.Router()

router.get('/', productController.getProducts)

module.exports = { routes: router }
