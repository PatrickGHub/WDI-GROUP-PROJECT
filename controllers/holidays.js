const Holiday = require('../models/holiday');

// No Holiday Index page

// function holidayIndex(req, res) {
//   Holiday
//     .find()
//     .exec()
//     .then(holiday => res.status(200).json(holiday))
//     .catch(() => res.status(500).json({ message: 'Something went wrong'}));
// }

function holidayCreate(req, res) {
  Holiday
    .create(req.body)
    .then(holiday => res.status(201).json(holiday))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function holidayShow(req, res) {
  Holiday
    .findById(req.params.id)
    .exec()
    .then(holiday => {
      if(!holiday) return res.status(401).json({ message: 'No holiday found'});
      res.json(holiday);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function holidayUpdate(req, res) {
  Holiday
    .findById(req.params.id)
    .then(holiday => {
      if(!holiday) return res.status(401).json({ message: 'No holiday found'});

      for(const field in req.body) {
        holiday[field] = req.body[field];
      }

      return holiday.save();
    })
    .then(holiday => res.json(holiday))
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function holidayDelete(req, res) {
  Holiday
    .findById(req.params.id)
    .then(holiday => {
      if(!holiday) return res.status(401).json({ message: 'No holiday found'});
      return holiday.remove();
    })
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ message: 'Something went wrong'}));
}

function addComment(req, res, next) {

  req.body.createdBy = req.user;

  Holiday
    .findById(req.params.id)
    .exec()
    .then((holiday) => {
      if(!holiday) return res.notFound();

      const comment = holiday.comments.create(req.body);
      holiday.comments.push(comment);

      return holiday.save()
        .then(() => res.json(comment));
    })
    .catch(next);
}

function deleteComment(req, res, next) {
  Holiday
    .findById(req.params.id)
    .exec()
    .then((holiday) => {
      if(!holiday) return res.notFound();

      const comment = holiday.comments.id(req.params.commentId);
      comment.remove();

      return holiday.save();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: holidayCreate,
  show: holidayShow,
  update: holidayUpdate,
  delete: holidayDelete,
  addComment: addComment,
  deleteComment: deleteComment
};
