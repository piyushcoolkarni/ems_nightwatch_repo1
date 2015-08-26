var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var newSchema=new Schema({
code:{type:Number,unique:true},
name:String,
city:String
});
 
module.exports = mongoose.model('employee', newSchema);