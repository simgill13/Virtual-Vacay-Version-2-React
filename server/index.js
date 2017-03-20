const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://userhouse:data@ds137090.mlab.com:37090/housingdata';

const router = express.Router();
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const {Houses} = require('./models');
const app = express();
// API endpoints go here!



app.get('/api/houses', (req, res) => {
  Houses
  .find()
  .exec()
  .then(data => res.json(data)
  .catch(console.error)
)}
);

























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
         mongoose.connect(DATABASE_URL, err => {
            if(err) {
              return reject(err);
        }
            console.log('Db connected');
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        });
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
