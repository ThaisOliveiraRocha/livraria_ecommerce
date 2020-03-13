//rotas para GET, POST, UPDATE, DELETE
module.exports = app => {
  const {
    listAllProducts,
    insertProduct,
    insertUser,
    listUser,
    deleteUser,
    listAllUsers,
    updatePassword,
    authenticateUser
  } = require("../config/db");
  const { check, validationResult } = require("express-validator/check");

  const express = require("express");
  app.use(express.json());

  app.get("/produtos", async function(req, resp) {
    const lista = await listAllProducts();
    console.log(lista);
    resp.send(lista);
  });

  app.post("/produtos", async function(req, res) {
    await insertProduct(req.body);
  });

  app.get("/user-cliente", async function(req, res) {
    const todos = await listAllUsers();
    res.send(todos);
  });

  app.get("/user-cliente/:email", async function(req, res) {
    const user = await listUser(req.param);
    res.send(user);
  });

  app.post("/user-cliente", async function(req, res) {
    res.send(await insertUser(req.body));
  });

  app.delete("/user-cliente", async function(req, res) {
    res.send(await deleteUser(req.body));
  });

  app.put("/user-cliente", async function(req, res) {
    res.send(await updatePassword(req.body.email, req.body.senha));
  });

  app.post("/user", async function(req, res, next) {
    await authenticateUser(req.body)
      .then(user => {
        console.log("user na rota ", user);
        user
          ? res.json(user)
          : res
              .status(400)
              .json({ message: "Username or password is incorrect" });
      })
      .catch(err => next(err));
  });
};