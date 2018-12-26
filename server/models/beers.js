const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema ({
  id: {
    type: Number,
    trim: true,
  },
  'Brewery Name': {
    type: String,
    trim: true,
  },
  'Beer Name': {
    type: String,
    trim: true,
  },
  'Beer Style': {
    type: String,
    trim: true,
  },
  ABV: {
    type: String,
    trim: true,
  }, 
  IBU: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('beer', beerSchema)