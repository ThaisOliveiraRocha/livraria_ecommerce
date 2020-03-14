const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    titulo: { type: String, unique: true, required: true },
    imagem: { type: String, required: true },
    ano: { type: String, required: true },
    genero: { type: String, required: true },
    preco: { type: String, required: true },
    situacao: { type: String, required: true },
    sinopse: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Books', BookSchema);