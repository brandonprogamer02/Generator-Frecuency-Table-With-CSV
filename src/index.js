const path = require('path');

const express = require('express');
const config = require('../config');
const routes = require('./routes/index');
const open = require('open');



// set up express
const app = express();

// defining variables
app.set('PORT', config.PORT || 4000);
app.set('PATH_INDEX_HTML', path.join(__dirname, '..', 'public'));

// load frontend
app.use(express.static(app.get('PATH_INDEX_HTML')));
// set up json 
app.use(express.json());

// set up routes
app.use(routes());

// init the server
app.listen(app.get('PORT'), async () => {
     console.log('Server is Running in Port ' + app.get('PORT'));
     // this is for to open the page with a tables 
     // await open('http://localhost:5000/');
});

