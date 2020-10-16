var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

var userMongoController = require('../controllers/user.controller');

/**
 * @Path /users/
 */
router.route('/') 
      .post(userController.createUser)
      .get(userController.findAll)

/**
 * @Path /users/:id
 */
router.route('/user/:id')
      .put(userController.updateUser)
      .delete(userController.deleteUser)
      .get(userController.findOneById)

router.get('/find/',userController.findWithQueryParams)
// /find/?id=2&email ...

router.post('/create', userMongoController.saveUser);

module.exports = router;
