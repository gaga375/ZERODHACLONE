const {model} = require("mongoose");
const {SignupSchema} = require('../Schema/SignUp');

const SignupModel = new model("Signup",SignupSchema)
module.exports = SignupModel;