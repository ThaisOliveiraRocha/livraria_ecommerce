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
  },

  async updateBooks(req, res) {
    const titulo = req.body.titulo;
    const updateFields = {
      imagem: req.body.imagem,
      ano: req.body.ano,
      sinopse: req.body.sinopse,
      situacao: req.body.situacao,
      preco: req.body.preco
    };
    const findUser = await Book.updateOne({ titulo: titulo }, updateFields, {
      new: true
    });
    const updateBook = await Book.findOne({ titulo: titulo });
    console.log(updateBook);
    return res.json({
      msg: `Livro atualizado com sucesso ${titulo}`,
      updateBook
    });
  },

  async deleteBooks(req, res) {
    const tituloDelete = `${req.body.titulo}`;
    console.log("body recebido ", tituloDelete);
    const deletado = await Book.findOneAndDelete({titulo: tituloDelete});
    console.log("excluido é: ", deletado);

    return res.json({ msg: `Item excluido com sucesso`, deletado });
  }
};
