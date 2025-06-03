const {model} = require("mongoose");
const {OrdersSchema} = require('../Schema/ordersSchema');

const OrderModel = new model("order",OrdersSchema)
module.exports = OrderModel;