const express = require('express');
const router = express.Router();
const drones = require('../controllers/drones.controller')

// require the Drone model here

router.get('/drones', drones.list);

router.get('/drones/create', drones.create);

router.post('/drones/create', drones.doCreate);

router.get('/drones/:id/edit', drones.edit);

router.post('/drones/:id/edit', drones.doEdit);

router.post('/drones/:id/delete', drones.delete);

router.get('/drones/:id', drones.details);

module.exports = router;
