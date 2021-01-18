const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://sim:test@ds145790.mlab.com:45790/breaze';
const router = express.Router();
const mongoose = require('mongoose');
const {User,Vacation} = require('./models');
const passport = require("passport"); //added this
const BearerStrategy = require("passport-http-bearer").Strategy; // a
const app = express();
app.use(bodyParser.json())
// API endpoints go here!











// / PASSPORT STRATEGY =========================


passport.use(new BearerStrategy(
  function(token, done) {
    console.log(token);

    User.findOne({ accessToken: token }, function (err, user) {
      console.log('token is here',token)
      console.log('user is here', User)
      console.log(user)
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });

  }
));




// ================================== -- USER COLLECTION--  STARTS  ===========================


app.get('/api/user',passport.authenticate('bearer', { session: false }), (req, res) => {
  User
  .find()
  .exec()
  .then(data => res.json({
      users:data.map(user=> user.apiRepr())
  }))
  .catch(console.error)
}
);


// this end point is created because i can use it to check if a user exists 
// in the data base, when google auth is clicked 
// -- if the user is already in the database, then this will be used
//-- if not a new user will be created.
app.get('/api/user/:googleId', (req, res) => {
  User
  .findOne({googleId: req.params.googleId})
  .exec()
  .then(data => res.json(data))
  .catch(console.error)
}
);


// this will take care of adding a new user
app.post('/api/user', (req, res) => {
//every new user should get a sample favorite vacation
  let sampleVacay = {
    soundUrl: 'sampletest',
    videoUrl: 'sampletest',
    description: 'is atest',
    city: 'test',
    country: 'test'
  }

  User
  .create({
  googleId: req.body.googleId,
  name:req.body.name,
  email:req.body.email,
  profilePicURL:req.body.profilePicURL,
  accessToken: req.body.accessToken,
  expiresAt: req.body.expiresAt,
  favoriteVacations:sampleVacay
  })
  .then(newPost =>{
    res.status(201).json(newPost)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message:'internal server error'});
  })

});




app.put('/api/user/:id', (req, res) => {
  
// before you post a new object in the favorite vacation array
// you need to seperate out the object into different 
//variables
    let country = req.body.country ;
    let city = req.body.city;
    let description =req.body.city;
    let videoUrl = req.body.videoUrl;
    let soundUrl = req.body.soundUrl;
  
User.findByIdAndUpdate(
    req.params.id,
    {$push: {"favoriteVacations": {country,city,description,videoUrl,soundUrl}}},
    {safe: true, upsert: true},
    function(err, user) {
      if(err){
        res.send(err)
      }

      res.json(user)
    }
);
})

app.delete('/api/user/:id', (req , res) =>{
  User
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(post => res.status(204).end())
  .catch(err => {console.error(err); res.status(500).json({message: 'Internal server error'})});
});
// ================================== -- USER COLLECTION--  ENDS  ===========================









//================================ - VACATION COLLECTION -- STARTS  ==========================

app.get('/api/vacation', (req, res) => {
  // Vacation
  // .find()
  // .exec()
  // .then(data => {
  //   res.json(data)
  // })
  // .catch(console.error)
 const data = [{
  country: 'Dubai',
  city:'Dubai',
  description: '',
  videoUrl: 'https://www.youtube.com/embed/HFIEwpbOWak',
  soundUrl: 'https://soundcloud.com/homnaynghegi-empressplay/wonderful-chill-out-music?in=sharpride/sets/wonderful-arabian-chill-out'
 }]

 res.json(data)
  
});

app.get('/api/vacation/:country', (req, res) => {
  console.log(req.params)
  var re = new RegExp(req.params.country, "i");
  Vacation
  .find({country:re})
  .exec()
  .then(data => res.json(data))
  .catch(console.error)
});


//================================ - VACATION COLLECTION -- ENDS  ==========================















// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {


        //  mongoose.connect(DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true }, err => {
        //     if(err) {
        //       return reject(err);
        // }
        //     console.log('Db connected');
        //     server = app.listen(port, () => {
        //         resolve();
        //     }).on('error', reject);
        // });
        server = app.listen(port, () => {
          console.log("app listening on port " ,port)
          resolve();
      }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
