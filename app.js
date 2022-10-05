
const express=require('express');
const bodyParser=require('body-parser');
const api = require('./api');
const port=3000;
const app=express();
var categoryModel = require('./models/categoryModel');
var productModel = require('./models/productModel');
var categoryRouter = require('./routers/categoryRouter')(categoryModel);  
var productRouter = require('./routers/productRouter')(productModel);  
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
app.use('/',categoryRouter,productRouter);
app.use('/api', api);
