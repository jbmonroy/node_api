const { handleHttpError } = require('../utils/handleError');
const { TracksModel } = require('../models');
const { matchedData } = require('express-validator');

const getTracks = async (req, res) => {
    try {
        const data = await TracksModel.find();
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: GET-TRACKS:: ${e}`);
        handleHttpError(res, 'ERROR_GET_TRACKS');
    }
};
const getTrack = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await TracksModel.findOne({ _id: id });
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: GET-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_GET_TRACK');
    }
};
const postTrack = async (req, res) => {
    try {
        req = matchedData(req);
        const data = await TracksModel.create(req);
        res.status(200).send({ data })
    } catch (e) {
        console.error(`ERROR: POST-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_POST_TRACK');
    }
};
const putTrack = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        console.log(id,body);
        const data = await TracksModel.findOneAndUpdate({ _id: id }, body);
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: PUT-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_PUT_TRACK');
    }
};
const deleteTrack = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await TracksModel.deleteOne({ _id: id });
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: DELETE-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_DELETE_TRACK');
    }
};

module.exports = {
    getTracks,
    getTrack,
    postTrack,
    putTrack,
    deleteTrack
}