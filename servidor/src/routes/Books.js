const express = require('express');
const router = express.Router();
const BooksController = require('../controller/BookController')

router.get('/get-books', BooksController.getAllBooks);
router.post('/insert', BooksController.insertBooks);
router.put('/update-books', BooksController.updateBooks);
router.delete('/delete-books', BooksController.deleteBooks);

module.exports = router;