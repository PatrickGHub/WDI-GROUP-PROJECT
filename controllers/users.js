const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then((users) => res.json(users))
    .catch(next);
}

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

// Add favorite place to user schema

function addFavourite(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) return res.notFound();

      user.favorites.push(req.body);
      return user.save({ validateBeforeSave: false });
    })
    .then(user => res.json(user))
    .catch(next);

}

//   User
//     .findById(req.params.id)
//     .then(wedding => {
//       if (wedding.ref === userRef) {
//         user.favorites.push(currentUserId);
//         return wedding.save();
//       } else {
//         console.log('incorrect code');
//       }
//     })
//     .then(wedding => {
//       console.log(wedding);
//       res.redirect(`/weddings/${wedding.id}`);
//     });
// }

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete,
  addFavourite: addFavourite

  // add this to router
};
