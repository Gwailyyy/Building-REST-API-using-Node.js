var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var categoryModel = require('./models/categoryModel');
var categoryRouter = require('./routers/categoryRouter');
const { application } = require('express');

// Connecting to database
const connectionString = "mongodb+srv://ahmedfarag:123@products.oaluyia.mongodb.net/store?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, connectionParams)
  .then(() => {
    console.log("connected succefully to the db");
  })
  .catch((err) => {
    console.log(err, "errorrrr ");
  });

module.exports = router;
