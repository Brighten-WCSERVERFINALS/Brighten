const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }
}, {
  collection: 'clients'
});

module.exports = mongoose.model('Client', clientSchema);
