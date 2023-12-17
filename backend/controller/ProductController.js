'use strict'

const mssql = require('../config/db');

const getProducts = async (req, res, next) => {
    const products = await mssql.getProducts()
    console.log('Products: ', products)
    res.send(products)
}

module.exports = { getProducts }