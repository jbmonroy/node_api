const express = require('express');
const { loginValidator, registerValidator } = require('../validators/authValidators');

const router = express.Router();

router.post('/login', loginValidator, async (req, res) => {
    try {
        const data = await req;
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: POST_LOGIN:: ${e}`);
        handleHttpError(res, 'ERROR_POST_LOGIN');
    }
});
router.post('/register', registerValidator, async (req, res) => {
    try {
        const data = await req;
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: POST_REGISTER:: ${e}`);
        handleHttpError(res, 'ERROR_POST_REGISTER');
    }
});


module.exports = router;