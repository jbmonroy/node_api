const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");

const idValidator = [
    check('id').exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    idValidator
}