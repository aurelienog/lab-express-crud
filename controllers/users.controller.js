const mongoose = require("mongoose");
const User = require("../models/User.model")


module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render("./users/list", {users : users})
    })
}
module.exports.create = (req, res, next) => {
  res.render('./users/new')
}

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
        name = req.body.name,
        email = req.body.email,
        res.redirect('/users')
    })
}