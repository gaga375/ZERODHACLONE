let mongoose = require('mongoose')
const {Schema} = mongoose.Schema;

const SignupSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
      password:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }
});

module.exports =  {SignupSchema};