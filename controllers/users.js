const User = require('../models/user');

function usersCreate(req, res, next) {
  console.log(req.body);
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(user => {
      if (!user) return res.notFound();
      return res.status(200).json(user);
    })
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(204).end();
    })
    .catch(next);
}

module.exports = {
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
