const { validationResult } = require("express-validator");
const { handleHttpError } = require('./handleError');

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (e) {
        handleHttpError(res, e.array());
    }
};

module.exports = {
    validateResults
}