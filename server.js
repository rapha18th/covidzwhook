'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// Require the module webhook/index.js
let webhook = require('./webhook')

app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())



// Allow access to resources from any origin and any headers. As we want
// the agent to reach the webhook and not bother with CORS, they are fully
// permissive
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
app.post('/webhook', webhook)

// The server is now listening on the port 8080
app.listen(8080)
console.log('info', `server listening on port 8080`)
