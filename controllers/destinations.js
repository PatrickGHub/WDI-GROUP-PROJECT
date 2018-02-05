const Destination = require('../models/destination');

function indexRoute(req, res, next) {
  Destination
    .find()
    .exec()
    .then((destinations) => res.json(destinations))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
