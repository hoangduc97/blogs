// import modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
    log,
    ExpressAPILogMiddleware
} = require('@rama41222/node-logger')

// init server
const app = express()
const logger = log({
    console: true,
    file: false,
    label: 'blogs'
})
// init port
const PORT = process.env.PORT | 3000

app.use(bodyParser.json())
app.use(cors())
app.use(ExpressAPILogMiddleware(logger, {
    request: true
}))

app.get('/', (req, res) => {
    return res.json({
        "say": "hello"
    })
})

app.listen(PORT, (error) => {
    console.log(`server running with port ${PORT}`);
})