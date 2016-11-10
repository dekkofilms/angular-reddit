'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pg = require('pg');

const environment = process.env.NODE_ENV;
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
