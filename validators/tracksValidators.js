const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");


const trackValidator = [
    check('name').exists().isString().notEmpty(),
    check('album').exists().isString().notEmpty(),
    check('cover').exists().isString().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().isString().notEmpty(),
    check('artist.nickname').exists().isString().notEmpty(),
    check('artist.nacionality').exists().isString().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().isNumeric().notEmpty(),
    check('duration.end').exists().isNumeric().notEmpty(),
    check('mediaId').exists().isMongoId().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    trackValidator
};