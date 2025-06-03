const  JWT  = require('jsonwebtoken');

module.exports.createSecretToken = (id) =>{
  return JWT.sign({id} , process.env.TOKEN_KEY,{
    expiresIn:3*24*60*60,
  });
}