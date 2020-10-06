var express = require('express');
const app = require('../app');
var router = express.Router();

/**
 * @Path /
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 5SIM3' });
});


module.exports = router;
