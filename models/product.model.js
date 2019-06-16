var mongoose = require('mongoose');

var Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId; 

var ProductSchema=new Schema({
  productId:ObjectId,
  productName:String,
  productDesc:String,
  productImage:String,
  productQty:Number,
  productPrice:Number
});

//commonjs pattern 
module.exports = mongoose.model('Product',ProductSchema);

