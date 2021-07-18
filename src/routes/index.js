const express = require('express');
const path = require('path');
// const pathData = path.join('file', 'data.csv');
const readFile = require('../logic/readCsv');
const router = express.Router();
const getAll = require('../logic/app');
const upload = require('../logic/multer');
const generateHTML = require('../logic/generateHtml');

module.exports = () => {
     
     router.post('/upload', upload.single('avatar'), (res, req) => {
          readFile(res.file.path, async (data) => {
               const dataAPI = await getAll(data);
               const marcado = generateHTML(dataAPI);
               req.send(marcado);
          });
     });
     return router;
}
