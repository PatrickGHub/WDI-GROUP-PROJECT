const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  placename: String,
  country: String
});

destinationSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Destination', destinationSchema);

//Made destinations model to test route
