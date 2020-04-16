const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    titulo: { type: String, unique: true, required: true },
    imagem: { type: String },
    autor: {type: String},
    ano: { type: String },
    genero: { type: String },
    preco: { type: String },
    situacao: { type: String },
    sinopse: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Books', BookSchema);