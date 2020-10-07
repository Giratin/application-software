var express = require('express');
var router = express.Router();
const eventController = require('../controllers/eventController');

/**
 * @Path /events
 */
router.get('/', eventController.getAll);
router.post('/add', eventController.createEvent);
router.get('/add', eventController.showAddEvent);
router.delete('/delete/:id', eventController.deleteEvent);

module.exports = router;
