const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();
const app = express();


// Mongoose Setup
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
//Mongoose error handler
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose Connected Successfully");
});
db.on('error', console.error.bind(console, 'connection error:'));

const usersRouter = require('./routes/users');
const cardRouter = require('./routes/card_routes')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/client/build/"));


app.use('/users', usersRouter);

app.get('/', (req, res) => {
  console.log('I am rendering correctly')
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/jobseekerProfile', cardRouter)

module.exports = app;
