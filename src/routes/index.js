const express = require('express');
const path = require('path');
const pathData = path.join('file', 'data.csv');
const readFile = require('../logic/readCsv');
const router = express.Router();
const getAll = require('../logic/app');
const helpers = require('../logic/multer');
const multer = require('multer');

module.exports = () => {
     router.get(`/api`, (res, req) => {
          readFile(pathData, async (data) => {
               const f = await getAll(data);
               // console.log(f);
               req.json(f);
          });
     });
     // upload file .csv
     router.post('/upload-profile-pic', (req, res) => {
          // 'profile_pic' is the name of our file input field in the HTML form
          let upload = multer({ storage: helpers.storage, fileFilter: helpers.imageFilter }).single('profile_pic');

          upload(req, res, function (err) {
               console.log(req.file);
               if (req.fileValidationError) {
                    return res.send(req.fileValidationError);
               }
               else if (!req.file) {
                    return res.send('Please select an image to upload');
               }
               else if (err instanceof multer.MulterError) {
                    return res.send(err);
               }
               else if (err) {
                    return res.send(err);
               }
               // Display uploaded image for user validation
               res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
          });
     });



     return router;
}
