'use strict';

const dbconfig = require('./dbconfig')

const mssql = require('mssql')

const getProducts = async () => {
    const connectionPool = await mssql.connect(dbconfig.sql)
    try {
        const query = 'select * from product'
        const productResultSet = await connectionPool.request().query(query)

        return productResultSet.recordset;
    } catch(error) {
        console.error('Connection to mssql is failed....')
        return error.message;
    }
}

module.exports = { getProducts }