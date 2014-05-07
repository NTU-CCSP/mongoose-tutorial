

// User schema in models/user.js

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: String,
  age: { type: Number, min: 0, max: 200 },
  student: Boolean,
  devices: [],
  location: {
    country: String,
    city: String
  },
  created: { type: Date, default: Date.now },
  updated: Date
});

var User = mongoose.model('User', UserSchema);



















