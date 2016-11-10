'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pg = require('pg');

const environment = process.env.NODE_ENV;
const config = require('../knexfile.js')[environment];
const knex = require('knex')(config);
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//method override middleware
app.use(methodOverride('_method'));

app.use(express.static('public'));

const auth = require('./routes/auth');
// const users = require('./routes/users');
// const posts = require('./routes/posts');

app.use('/auth', auth);

app.listen(PORT, function () {
  console.log('Lisening!');
});
