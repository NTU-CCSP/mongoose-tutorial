

// Database configs in db.js

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err)
});

// Connection established
mongoose.connection.once('open', function () {
  console.log('database connection established');
});

// Require models schema
require('./models/user');









