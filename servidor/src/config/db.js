const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const item = {
  imagem: "book2.png",
  titulo: "Tarde Demais",
  genero: "romance",
  autor: "Colleen Hoover",
  ano: "2014",
  situacao: "novo",
  preco: "10.50",
  qtd: 0
};

listAllProducts = async () =>
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Produtos");
      collection.find().toArray((err, items) => {
        resolve(items);
      });
    });
  });

insertProduct = async item => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      dataBase.collection("Produtos").insertOne(item);
      console.log("item inserido com sucesso.");
      resolve(item);
    });
  });
};

listUser = async email => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataBase = client.db("LivrariaDB");
      dataBase.collection("Usuarios").findOne({ email }, function(err, result) {
        if (err) throw err;
        console.log(result);
        resolve(JSON.stringify(result));
      });
    });
  });
};

listAllUsers = async () =>
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }

      const dataBase = client.db("LivrariaDB");
      dataBase
        .collection("Usuarios")
        .find()
        .toArray((err, items) => {
          console.log(items);
          resolve(JSON.stringify(items));
        });
    });
  });

insertUser = async novoUser => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      collection.insertOne(novoUser);
      console.log("usuário inserido com sucesso.");
      resolve("inserido com sucesso!");
    });
  });
};

deleteUser = async id => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      collection.deleteOne(id, function(err, obj) {
        if (err) throw err;
        console.log(`${id} deletado com sucesso!`);
        resolve("excluido com sucesso!");
      });
    });
  });
};

updatePassword = async (email, pwd) => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      const myquery = { email: email };
      const newValue = { $set: { senha: pwd } };

      collection.updateOne(myquery, newValue, function(err, obj) {
        if (err) throw err;
        console.log("Senha alterada com sucesso!");
        resolve("Alterado com sucesso!");
      });
    });
  });
};

authenticateUser = async ({ email, senha }) => {
  new Promise((resolve, reject) => {
    mongo.connect(url, (err, client) => {
      if (err) {
        console.log(err);
        return;
      }
      const dataBase = client.db("LivrariaDB");
      const collection = dataBase.collection("Usuarios");
      const user = collection.findOne({ email }, function(err, result) {
        console.log("ESSE VAI ",result);
        if (err) throw err;
        // resolve(JSON.stringify(result));
        // if (result.senha === senha) {
        //   resolve(result);
        // }
        resolve(JSON.stringify(result));
      });
      console.log("user db ==> ", user);

      //console.log(collection);
      // if (user.senha === senha) {
      //   return user;
      // }
      return "Usuário não encontrado.";
    });
  });
};

module.exports = {
  listAllProducts,
  insertProduct,
  insertUser,
  listUser,
  deleteUser,
  listAllUsers,
  updatePassword,
  authenticateUser
};
