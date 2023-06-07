const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { UsersModel } = require('../models');
const { tokenSign } = require('../utils/handleJwt');

const postLogin = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await UsersModel.findOne({ email: req.email })
            .select('name age email password role');
        if (!user) {
            handleHttpError(res, 'USER_NOT_FOUND', 404);
            return;
        }
        const passwordHash = user.password;
        const check = await compare(req.password, passwordHash);
        if (!check) {
            handleHttpError(res, 'INVALID_PASSWORD', 401);
            return;
        }
        user.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        };
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: POST_LOGIN:: ${e}`);
        handleHttpError(res, 'ERROR_POST_LOGIN');
    }
};

const postRegister = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const user = await UsersModel.create(body);
        user.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        }
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: POST_REGISTER:: ${e}`);
        handleHttpError(res, 'ERROR_POST_REGISTER');
    }
};

module.exports = {
    postLogin,
    postRegister
}