const { idValidator } =  require('../validators/commonValidators');
const { trackValidator } = require('../validators/tracksValidators');
const { getTracks, getTrack, postTrack, putTrack, deleteTrack } = require('../controllers/tracks-controller');

const router = require('express').Router();

router.get('/', getTracks);

router.get('/:id', idValidator, getTrack);

router.post('/', trackValidator, postTrack);

router.put('/:id', idValidator, trackValidator, putTrack);

router.delete('/:id', idValidator, deleteTrack);


module.exports = router;