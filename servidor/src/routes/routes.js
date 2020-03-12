//rotas para GET, POST, UPDATE, DELETE
module.exports = app => {
  const {
    listAllProducts,
    insertProduct,
    insertUser,
    listUser,
    deleteUser,
    listAllUsers
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
    await insertUser(req.body);
  });

  app.delete("/user-cliente", async function(req, res) {
    await deleteUser(req.body);
  });
};
