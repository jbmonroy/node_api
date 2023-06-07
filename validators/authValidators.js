const { check } = require("express-validator");
const { validateResults } = require('../utils/handleValidator');

const loginValidator = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isString().isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];
const registerValidator = [
    check('name').exists().notEmpty().isString().isLength({ min: 3, max: 99 }),
    check('age').exists().notEmpty().isNumeric(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isString().isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    loginValidator,
    registerValidator
}

