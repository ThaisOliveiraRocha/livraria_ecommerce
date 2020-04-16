const mongoose = require("mongoose");
require("../model/User");
const User = mongoose.model("User");

module.exports = {
  async create(req, res) {
    const user = req.body;
    const newUser = await User.create(user);
    return res.json({
      msg: `Usuario ${user.nome} inserido com sucesso!`,
      newUser
    });
  },

  // async changePass(req, res) {
  //   const userBody = req.body.senha;
  //   const userParam = req.param.email;
  //   const findUser = await User.updateOne(userParam, userBody, {
  //     new: true
  //   });
  //   return res.json({ msg: `Senha alterada com sucesso`, findUser });
  // },

  async changePass(req, res) {
    const userBody = req.body.senha;
    const userParam = req.body.email;
    const findUser = await User.updateOne(
      { email: userParam },
      { senha: userBody },
      {
        new: true
      }
    );
    const user = await User.findOne({ email: userParam });
    console.log(user);
    return res.json({
      msg: `Senha req==> ${userParam} alterada com sucesso`,
      findUser
    });
  },

  async delete(req, res) {
    const userParam = req.body.email;
    const deletado = await User.deleteOne({ email: userParam });
    return res.json({ msg: `Item excluido com sucesso`, deletado });
  },

  async login(req, res) {
    const userBody = req.body;
    const user = await User.findOne({ email: userBody.email });

    if (user.senha === userBody.senha) {
      return res.status(200).send(user);
    }
    return res.status(401);
  }
};
