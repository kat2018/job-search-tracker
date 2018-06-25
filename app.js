var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();

// Mongoose Setup
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
//Mongoose error handler
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose Connected Successfully");
});
db.on('error', console.error.bind(console, 'connection error:'));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
