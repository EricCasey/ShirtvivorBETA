"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
// send in the token as a param and get user info out. (probably not secure)
  router.get("/api/userinfo/:user", (req, res) => {
      let currUser = null;
      let token = req.params.user
      console.log(token)
      knex
        .select("*")
        .from("sessions")
        .where("token", token)
        .then((hasSession) => {
          if (hasSession[0]) {
            let currUser = hasSession[0]
            console.log(currUser)
            let allData = currUser //.toString();
            res.json(allData);
            console.log(allData)
            return allData
          }
        })
  });
  return router;
}
