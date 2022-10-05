
var mongoose=require('mongoose');
 
var categoryModel = new mongoose.Schema({
    Name:String
});
 
module.exports = mongoose.model(
    'category', categoryModel, 'category');