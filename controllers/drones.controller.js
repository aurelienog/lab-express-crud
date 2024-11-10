const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

module.exports.list = (req, res, next) => {
  Drone.find()
    .then(drones => {
      res.render('./drones/list', {drones : drones})
    })
}
module.exports.create = (req,res,next) => {
  res.render('./drones/create-form')
}

module.exports.doCreate = (req,res,next) => {
  Drone.create(req.body)
    .then((drone) => {
        name = req.body.name, 
        propellers = req.body.propellers,
        maxSpeed = req.body.maxSpeed
    }, res.redirect('/drones'))
  .catch(next)
}

module.exports.details = (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("./drones/details", {drone : drone})
    })
}

module.exports.edit = (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render('./drones/update-form', {drone : drone})
    })
};

module.exports.doEdit = (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body)
    .then((drone) => {
      name = req.body.name,
        propellers = req.body.propellers,
        maxSpeed = req.body.maxSpeed,
        res.redirect(`/drones/${req.params.id}`)
    })
};

module.exports.delete = (req, res, next) => {
  Drone.findByIdAndRemove(req.params.id)
    .then((drone) => res.redirect("/drones"))
}

