const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const db = require('../database/index.js')
const cors = require('cors');
const port = 9000;

const router = express.Router();

const dirPath = __dirname + '/../client/dist';
app.use('/photos/', router);
app.use(express.static(dirPath));

app.get(['/', '/p/*'], (req, res) => {
  res.sendFile(path.join(dirPath, 'index.html'))
})

router.use(bodyParser.urlencoded({extended: true}));
router.use(cors());

router.get('/p/:id', (req, res) => {
  let index = req.params.id;
  db.find({itemId: index})
  .then((data) => {
    let imageUrls = [data[0]._doc.pictures[0], data[0]._doc.pictures[1], data[0]._doc.pictures[2]]
    console.log(imageUrls);
    res.send(imageUrls);
  })
  .catch((err) => {
    console.log(err);
    res.end();
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});