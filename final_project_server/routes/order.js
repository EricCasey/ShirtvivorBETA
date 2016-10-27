"use strict";

const express = require('express');
const router  = express.Router();
var chance = require('chance').Chance();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/order", (req, res) => {

    console.log(req.body)

    knex("orders")
      .insert({})
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
                  // res.cookie("token", newToken)
                  res.json(results);
                  console.log(results);

                });
              }
            })
        }
        // res.json(results);
    });
  });

  return router;
}
