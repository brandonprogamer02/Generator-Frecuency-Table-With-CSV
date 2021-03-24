const dotnev = require('dotenv');

// set up dotenv to use .env
dotnev.config();

module.exports = {
     HOST: process.env.HOST,
     PORT: process.env.PORT,
     BASE_URL: process.env.BASE_URL
}