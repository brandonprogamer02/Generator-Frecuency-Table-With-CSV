const csv = require('csv-parser');
const fs = require('fs');


module.exports = function (path, callback) {
     const array = [];
     const res = fs.createReadStream(path)
          .pipe(csv())
          .on('data', (row) => {
               // console.log(row);
               array.push(row)
          })
          .on('end', () => callback(array));
};

