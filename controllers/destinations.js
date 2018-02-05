const Destination = require('../models/destination');

function indexRoute(req, res, next) {
  Destination
    .find()
    .exec()
    .then((destinations) => res.json(destinations))
    .catch(next);
}

function destinationShow(req, res) {
  Destination
    .findById(req.params.id)
    .exec()
    .then(destination => {
      if(!destination) return res.status(401).json({ message: 'No destination found'});
      res.json(destination);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

module.exports = {
  index: indexRoute,
  show: destinationShow
};
