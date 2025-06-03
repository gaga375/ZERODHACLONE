const {model} = require("mongoose");
const {PositionsSchema} = require('../Schema/positionSchema');

const PositionModel = new model("position",PositionsSchema)
module.exports = PositionModel;