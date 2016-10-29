"use strict";

const express = require('express');
const router  = express.Router();

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/register", (req, res) => {

    let newUser = req.body
    knex('users')
      .insert({
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        is_designer: false,
        is_admin: false,
        image_submission: ''
      })
      .then((results) => {
        res.json(results);
        console.log(results)
    });

  });
  return router;
}
