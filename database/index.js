const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/randomthing2', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const photoSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    unique: true,
    required: true
  },
  pictures: [String]
})

const Photos = mongoose.model('PhotoData', photoSchema);

module.exports = Photos;