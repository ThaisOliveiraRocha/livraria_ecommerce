const mongoose = require("mongoose");
require("../model/Book");
const Book = mongoose.model("Books");

module.exports = {
  async getAllBooks(req, res) {
    const books = await Book.find();
    return res.json(books);
  },

  async insertBooks(req, res) {
    const book = req.body;
    const newBook = await Book.create(book);
    return res.send(newBook);
  }
};
