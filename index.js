const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const productRouter = require('./backend/routers/ProductRouter')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/products', productRouter.routes)

app.listen(5000, () => console.log("Server is running on port 5000!"))