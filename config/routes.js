const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

// Routes go here

router.route('/users')
  .post(users.create);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
