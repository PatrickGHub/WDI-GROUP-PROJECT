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
    .catch((err) => res.status(500).json(err));
}

function destinationCreate(req, res) {
  req.body.createdBy = req.user.id;
  Destination
    .create(req.body)
    .then(destination => res.status(201).json(destination))
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  index: indexRoute,
  show: destinationShow,
  create: destinationCreate
};
