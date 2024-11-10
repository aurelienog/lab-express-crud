const mongoose = (require('mongoose'));

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    match: /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
  },
  password: {
    type: String,
    required: [true, "password is required"]
  }
},
  { timestamps: true })


module.exports = mongoose.model("User", schema);