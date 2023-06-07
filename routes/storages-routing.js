const express = require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { postFile, getFile, deleteFile } = require('../controllers/storages-controller');
const { idValidator } = require('../validators/commonValidators');

const router = express.Router();

router.get('/:id', idValidator, getFile);
router.post('/', uploadMiddleware.single('file'), postFile);
router.delete('/:id', idValidator, deleteFile);

module.exports = router;