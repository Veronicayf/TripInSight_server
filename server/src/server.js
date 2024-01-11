const express = require('express')
const mainRouter = require('./routes/main.Router/main.Router')
const morgan = require('morgan')
const cors = require('cors')

const server = express(); 

server.use(morgan('dev'))

server.use(cors())

server.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*") 
    res.header("Access-Controll-Allow-Credentials", "true")
    res.header(
        "Access-Origin-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        )
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

server.use(express.json())
server.use(mainRouter)

module.exports = server; 