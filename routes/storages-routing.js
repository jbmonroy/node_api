const express = require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { postFile } = require('../controllers/storages-controller');

const router = express.Router();

router.post('/', uploadMiddleware.single('file'), postFile);

module.exports = router;