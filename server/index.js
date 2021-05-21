const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const createPhotoSchema = require('../seed.js');
const db = require('../database/index.js')
const port = 9000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/images/:id', (req, res) => {
  let index = req.params.id;
  let firstImageUrl = db.find({itemId: index})
  .then((data) => {
    console.log(data[0]._doc);
    console.log(data[0]._doc.pictures[0]);
    console.log(data[0]._doc.pictures[1]);
    console.log(data[0]._doc.pictures[2]);
    console.log('hey that worked')
  })
  console.log(req.params.id);
  res.end();
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});