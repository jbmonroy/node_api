const router = require('express').Router();
const fs = require('fs');

const PATH_ROUTES = __dirname;

const removeExt = (filename) => {
    return filename.split('-').shift();
};

fs.readdirSync(PATH_ROUTES).filter(file => {
    const fileName = removeExt(file);
    if (fileName !== 'index') {
        router.use(`/${fileName}`, require(`./${file}`));
    }
});

module.exports = router;