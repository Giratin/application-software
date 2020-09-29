const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllter');

router.get('/', bookController.list );
router.get('/detail/:bookId', bookController.getOneById );

module.exports = router;