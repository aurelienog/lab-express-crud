const express = require("express");
const router = express.Router();
const users = require('../controllers/users.controller')

router.get("/users", users.list)
router.get("/users/new", users.create)
router.post("/users/new", users.doCreate)
module.exports = router;