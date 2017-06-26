var Uploader = require('s3-streaming-upload').Uploader,
    upload = null,
    stream = require('fs').createReadStream('/Users/sbarreiros/Documents/data/imports/test_other.csv');

upload = new Uploader({
  // credentials to access AWS
  // accessKey:  process.env.AWS_S3_ACCESS_KEY,
  // secretKey:  process.env.AWS_S3_SECRET_KEY,
  bucket:     'vino-test-bucket',
  objectName: "myUploadedFile",
  stream:     stream,
  debug:      true,
  objectParams: {
    ServerSideEncryption: 'AES256'
  }
});

upload.send(function (err) {
  if (err) {
    console.error('Upload error' + err);
  }
});
