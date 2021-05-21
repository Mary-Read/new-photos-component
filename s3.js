require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

const getPictures = () => {
  let params = {
    Bucket: bucketName
  }
  console.log('hello');
  return s3.listObjectsV2(params).promise()
  .then((data) => {
    let pictureUrls = data.Contents.map(((content) => {
      let url = `https://${bucketName}.s3.${region}.amazonaws.com/${content.Key}`
      return url;
    }))
    return pictureUrls;
  })
  .catch((err) => {
    console.log('error')
  })
}

// const getPicture = (givenKey) => {
//   let params = {
//     Key: givenKey,
//     Bucket: bucketName
//   }

//   s3.getObject(params).createReadStream()
// }

module.exports = {
  getPictures
}