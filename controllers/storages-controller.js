const { matchedData } = require('express-validator');
const { StoragesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { unlink, unlinkSync } = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storages`;

const getFile = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await StoragesModel.findOne({ _id: id });
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: GET_FILE:: ${e}`);
        handleHttpError(res, 'ERROR_GET_FILE');
    }
};

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

const deleteFile = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const { filename } = await StoragesModel.findOne({ _id: id });
        const filePath = `${MEDIA_PATH}/${filename}`;
        const data = await StoragesModel.deleteOne({ _id: id });
        unlinkSync(filePath);
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: DELETE_FILE:: ${e}`);
        handleHttpError(res, 'ERROR_DELETE_FILE');
    }
};


module.exports = {
    getFile,
    postFile,
    deleteFile
};
