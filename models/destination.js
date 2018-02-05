const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  town: {type: String, required: true},
  country: {type: String, required: true},
  altitude: Number,
  green: Number,
  blue: Number,
  red: Number,
  black: Number,
  lifts: Number,
  greatFor: String,
  overview: String,
  image: {type: String, required: true},
  lat: Number,
  lng: Number
});

destinationSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Destination', destinationSchema);
