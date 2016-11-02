"use strict";

const express = require('express');
const router  = express.Router();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/getCurrentUser", (req, res) => {

  let token = req.body.token;
  let currUser = null;

    knex
    .select("*")
    .from("sessions")
    .where("token", token)
    .then((hasSession) => {
      if (hasSession[0]) {
        currUser = hasSession[0]
        return currUser.user_id
      }
    }).then((userinfo) => {

      knex
      .select("*")
      .from("users")
      .where("id", userinfo)
      .then((results) => {
        res.json(results)
      })
    })
  });


  return router;
}
