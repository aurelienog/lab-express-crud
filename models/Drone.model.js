// Iteration #1
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  propellers: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
},
  { timestamps: true });

module.exports = mongoose.model("Drone", schema);