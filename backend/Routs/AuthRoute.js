const { Signup,Login } = require('../Controllers/AuthController');
const {userVerification} = require('../Middlewares/Authmiddleweare')
const router = require("express").Router();

router.post("/Signup", Signup);
router.post("/login", Login);
router.post('/',userVerification)
module.exports = router;