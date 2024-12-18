const { Router } = require('express');
const registerUser = require('../controllers/Usercontroler');
const getregisterUser = require('../controllers/getuder');
const deleteshowUser = require('../controllers/deleteuser');

1
const router = Router();

router.post('/register', registerUser);
router.get('/showregister', getregisterUser);
router.delete('/users/:id', deleteshowUser);

module.exports = router;
