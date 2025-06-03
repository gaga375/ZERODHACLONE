const {model} = require("mongoose");
const {HoldingsSchema} = require('../Schema/holdinsSchema');

const HoldingsModel = new model("Holding",HoldingsSchema)
module.exports = HoldingsModel;