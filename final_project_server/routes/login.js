"use strict";

const express = require('express');
const router  = express.Router();
var chance = require('chance').Chance();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/login", (req, res) => {
    var email = req.body.loginEmail;
    var password = req.body.loginPassword;
    var currUser = null;
    var newToken = null;
    knex
      .select("*")
      .from("users")
      .where("email", email)
      .andWhere("password", password)
      .then((users) => {
        if (users[0]) {
          currUser = users[0]
          knex
            .select("*")
            .from("sessions")
            .where("user_id", currUser.id)
            .then((hasSession) => {
              if (!hasSession[0]) {
                newToken = chance.guid();
                knex('sessions')
                .returning('token')
                .insert({user_id: currUser.id, token: newToken})
                .then((results)=> {
                  // res.cookie("token", newToken)
                  let resultsMain = {
                    token: newToken,
                    user: currUser
                  }
                  res.json(resultsMain);
                });
              }
            })
        }
        // res.json(results);
    });
  });

  router.post("/api/logout", (req, res) => {
    var token = req.body.token;
    var currUser = null;

    knex
      .select("*")
      .from("sessions")
      .where("token", token)
      .then((hasSession) => {
        if (hasSession[0]) {
          knex('sessions')
            .where('token', token)
            .del()
            .then((results) => {
              res.json(results);
            })
        }
      })

  });



  return router;
}
