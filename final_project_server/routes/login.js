"use strict";

const express = require('express');
const router  = express.Router();
var chance = require('chance').Chance();

module.exports = (knex) => {

  router.post("/api/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
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
                console.log(newToken)
                knex('sessions')
                .returning('token')
                .insert({user_id: currUser.id, token: newToken})
                .then((results)=> {
                  res.json(results);
                });
              }
            })
        }
        res.json(results);
    });
  });

  router.post("/api/logout/:id", (req, res) => {
    var id = req.body.id;
    var currUser = null;

    knex
      .select("*")
      .from("users")
      .where("id", id)
      .then((users) => {
        if (users[0]) {
          currUser = users[0]

          knex
            .select("*")
            .from("sessions")
            .where("user_id", currUser.id)
            .then((hasSession) => {
              if (hasSession[0]) {

                knex('sessions')
                  .where('user_id', currUser.id)
                  .del()
              }
            })
        }
    });
  });



  return router;
}
