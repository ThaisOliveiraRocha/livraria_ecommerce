const express = require('express');
const router = express.Router();
const UserContoller = require('../controller/UserContoller')

router.post('/create', UserContoller.create);
router.put('/change-password/:email', UserContoller.changePass);
router.delete('/delete/:email', UserContoller.delete);
router.post('/login', UserContoller.login);

module.exports = router;
