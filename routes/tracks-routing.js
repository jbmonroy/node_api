const { handleHttpError } = require('../utils/handleError');
const { TracksModel } = require('../models');
const { matchedData } = require('express-validator');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const data = await TracksModel.find();
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: GET-TRACKS:: ${e}`);
        handleHttpError(res, 'ERROR_GET_TRACKS');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await TracksModel.findOne({ _id: id });
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: GET-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_GET_TRACK');
    }
});

router.post('/', (req, res) => {
    try {
        req = matchedData(req);
        const data = TracksModel.create(req);
        res.status(200).send({ data })
    } catch (e) {
        console.error(`ERROR: POST-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_POST_TRACK');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await TracksModel.findOneAndUpdate({ _id: id }, body);
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: PUT-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_PUT_TRACK');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await TracksModel.deleteOne({ _id: id });
        res.status(200).send({ data });
    } catch (e) {
        console.error(`ERROR: DELETE-TRACK:: ${e}`);
        handleHttpError(res, 'ERROR_DELETE_TRACK');
    }
});


module.exports = router;