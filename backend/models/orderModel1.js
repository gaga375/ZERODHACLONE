const {model} = require("mongoose");
const {OrderShowSchema} = require('../Schema/ordersSchema1');

const OrderShowModel = new model("orderShow",OrderShowSchema)
module.exports = OrderShowModel;