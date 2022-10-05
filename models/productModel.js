const { ObjectID } = require('bson');
var mongoose=require('mongoose');
 
var productModel = new mongoose.Schema({
    Name:String,
    Price:Number,
    Quantity:Number,
    ImgUrl:String,
    categoryId:ObjectID
});
 
module.exports = mongoose.model(
    'products', productModel, 'products');