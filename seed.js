const faker = require('faker');
const s3Methods = require('./s3');
const db = require('./database/index.js')

class Photo {
  constructor(itemId, name) {
    this.itemId = itemId;
    this.name = name;
  }
}

let createPhotoSchema = () => {
  console.log('ok')
  let imageUrls = s3Methods.getPictures()
  .then((data) => {
    let photoData = [];
    for (let i = 0; i < 26; i++) {
      let fakeId = i;
      let fakeName = faker.commerce.productName();
      let photos = [data[i*4 + 1], data[i*4 + 2], data[i*4+3]];
      let photo = new Photo(fakeId, fakeName);
      photo.pictures = photos;
      photoData.push(photo);
    }
    db.insertMany(photoData)
    .then(() => {
      console.log('Data inserted')
      return process.exit(0)
    })
    .catch((err) => {
      console.log(err)
      process.exit(1);
    })
  })
}

db.deleteMany({})
.then(() => {
  createPhotoSchema();
})

module.exports = createPhotoSchema