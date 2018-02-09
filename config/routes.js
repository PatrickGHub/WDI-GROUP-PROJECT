const express = require('express');
const router  = express.Router();
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const holidays = require('../controllers/holidays');
const destinations = require('../controllers/destinations');
const secureRoute = require('../lib/secureRoute');

// Routes go here

router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/users/:id/favourite')
  .post(secureRoute, users.addFavourite);

router.route('/destinations')
  .get(destinations.index)
  .post(secureRoute, destinations.create);

router.route('/destinations/:id')
  .get(destinations.show);

router.route('/holidays')
  .get(secureRoute, holidays.index)
  .post(secureRoute, holidays.create);

router.route('/holidays/:id')
  .get(secureRoute, holidays.show)
  .put(secureRoute, holidays.update)
  .delete(secureRoute, holidays.delete);

router.route('/holidays/:id/comments')
  .post(secureRoute, holidays.addComment);

router.route('/holidays/:id/comments/:commentId')
  .delete(secureRoute, holidays.deleteComment);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

module.exports = router;
