const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController');

/**
 * @Path /books/
 */
router.get('/', booksController.getAll)

/**
 * @Path /books/:bookId
 */
router.get('/:bookId', booksController.getOneById)


module.exports = router;