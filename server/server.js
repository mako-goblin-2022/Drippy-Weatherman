const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  console.log(`Server Hit`)
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
