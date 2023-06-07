const express = require('express');
const fs = require('fs');

const router = express.Router();
const PATH_ROUTES = __dirname;


const removeExt = (filename) => {
    return filename.split('-').shift();
};

fs.readdirSync(PATH_ROUTES).filter(file => {
    if (file !== 'index.js') {
        const fileName = removeExt(file);
        router.use(`/${fileName}`, require(`./${file}`));
    }
});

module.exports = router;