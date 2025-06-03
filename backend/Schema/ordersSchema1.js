let mongoose = require('mongoose')
const {Schema} = mongoose.Schema;

const OrderShowSchema = new mongoose.Schema({
     name: String,
    price: Number,
    mode: String,
    qty:Number
});

module.exports =  {OrderShowSchema};