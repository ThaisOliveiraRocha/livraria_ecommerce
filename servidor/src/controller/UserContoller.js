const mongoose = require('mongoose');
require('../model/User')
const User = mongoose.model('User');

module.exports = {
    async create(req, res) {
        const user = req.body
        const newUser = await User.create(user)
        return res.json({ msg: `Usuario ${user.nome} inserido com sucesso!`, newUser });
    },

    async changePass(req, res) {
        const userBody = req.body
        const userParam = req.param.email
        const findUser = await User.updateOne(userParam, userBody, { new: true })
        return res.json({ msg: `Senha alterada com sucesso`, findUser });
    },

    async delete(req, res) {
        const userParam = req.param.email
        await User.findOneAndRemove(userParam)
        return res.send();
    },

    async login(req, res) {
        const userBody = req.body
        const user = await User.findOne(userBody.email);

        if (user.senha === userBody.senha) {
            return res.status(200).json(user)
        }
        return res.status(401);
    },

};