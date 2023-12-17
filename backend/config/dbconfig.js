'use strict';
const dotenv = require('dotenv');

dotenv.config();


const DEFAULT_NODEJS_PORT = 5000
const HOST = 'localhost'
const HOST_URL = 'http://localhost:5000'

const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_SERVER, DB_PORT } = process.env

const sqlEncrypt = process.env.ENCRYPT === "true";

module.exports = {
    port: DEFAULT_NODEJS_PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: DB_SERVER,
        database: DB_DATABASE,
        user: DB_USER,
        password: DB_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            port: Number(DB_PORT),
            trustServerCertificate: true
        }
    }
}
