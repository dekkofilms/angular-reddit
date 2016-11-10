'use strict';

const express = require('express');
const router = express.Router();

const environment = process.env.NODE_ENV;
const config = require('../../knexfile.js')[environment];
const knex = require('knex')(config);

const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/signup', function (req, res) {
  console.log('from server', req.body);
  knex('users').where('username', req.body.username).first().then(function (user) {
    if (!user) {
      bcrypt.hash(req.body.password, 12).then(function (password, err) {
        knex('users')
          .insert({username: req.body.username, hashed_password: password})
          .returning('*')
          .then(function (user) {
            const token = jwt.sign({id: user.id}, process.env.JWT_Token);

            res.json({
              token: token
            });
        })
      })
    }
  })
});


module.exports = router;
