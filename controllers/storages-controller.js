const { matchedData } = require('express-validator');
const { StoragesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;

const postFile = async (req, res) => {
    try {
        const { file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        };
        const data = await StoragesModel.create(fileData); 
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: POST_FILE:: ${e}`);
        handleHttpError(res, 'ERROR_POST_FILE');
    }
};

module.exports = {
    postFile
};
