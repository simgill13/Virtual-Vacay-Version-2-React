const mongoose = require('mongoose');


const housingSchema = mongoose.Schema({

  title: {type: String, required: true},
  url: {type: String, required: true},
  location: String,
  price: {type: String, required: true},
  description: String,
  accomodates: Number


})

//ADDED THE USER SCHEMA
const userSchema = mongoose.Schema({

  name: {type: String, required: true},
  id: {type: String, required: true},
  profilePicURL: String,
  accessToken: String,
  expiresAt: Number
})

// virtuals
// api reps


const Houses = mongoose.model('Houses', housingSchema);
const User = mongoose.model('User',userSchema);

module.exports = {Houses, User};
