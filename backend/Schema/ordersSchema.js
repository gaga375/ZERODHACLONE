let mongoose = require('mongoose')
const {Schema} = mongoose.Schema;

const OrdersSchema = new mongoose.Schema({
     name: String,
    price: Number,
    percent: String,
    isDown:Boolean,
    mode: String
});

module.exports =  {OrdersSchema};