const express = require('express');
const { loginValidator, registerValidator } = require('../validators/authValidators');
const { postLogin, postRegister } = require('../controllers/auth-controller');

const router = express.Router();

router.post('/login', loginValidator, postLogin);

router.post('/register', registerValidator, postRegister);


module.exports = router;