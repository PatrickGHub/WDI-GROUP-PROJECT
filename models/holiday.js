const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  comment: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

const holidaySchema = new mongoose.Schema({
  holidayname: { type: String, required: true, unique: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  attendees: String, // later needs to be changed into dropdown menu from user schema - Rane was going to show us
  dateArrive: String,
  dateDepart: String,
  destination: String, // later will link to the API in a dropdown menu
  // favourites: null,
  comments: [ commentSchema]
});


holidaySchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Holiday', holidaySchema);
