const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const url = "mongodb://localhost:27017/LivrariaDB";

app.use(cors());
app.use(express.json());

mongoose.connect(url, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true });

app.use('/users', require('./src/routes/User'));
app.use('/books', require('./src/routes/Books'));

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Servidor conectado na porta ${port}.`);
});
