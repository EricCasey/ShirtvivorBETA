"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {



  router.get("/api", (req, res) => {

  console.log(req)

  let token = req;
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
      }).then((results) => {
        res.json(results)
      })


  });


  return router;
}
