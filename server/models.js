const mongoose = require('mongoose');


const housingSchema = mongoose.Schema({

  title: {type: String, required: true},
  url: {type: String, required: true},
  location: String,
  price: {type: String, required: true},
  description: String,
  accomodates: Number


})

// virtuals
// api reps


const Houses = mongoose.model('Houses', housingSchema);

module.exports = {Houses};
