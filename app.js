require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//Routes
const cards = require('./routes/api/cards')
const usersRouter = require('./routes/api/users')
// const cardRouter = require('./routes/card_routes')

// Mongoose Setup
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)

//Mongoose error handler
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose Connected Successfully")
});
db.on('error', console.error.bind(console, 'connection error:'))

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(express.static(__dirname + "/client/build/"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

//Use Routes
app.use('/', cardRouter)
app.use('/api/cards', cards)
app.use('/api/users', usersRouter)


module.exports = app
