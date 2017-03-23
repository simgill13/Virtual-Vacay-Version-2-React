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



const vacationSchema = mongoose.Schema({
  country: {type: String, required: true}, 
  city:{type: String, required: true},
  description: {type: String, required: true},
  videoUrl: {type: String, required: true},
  soundUrl: String
})





const Houses = mongoose.model('Houses', housingSchema);
const User = mongoose.model('User',userSchema);
const Vacation = mongoose.model('Vacation',vacationSchema);


module.exports = {Houses, User,Vacation};
