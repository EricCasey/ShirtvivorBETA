"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/api/login", (req, res) => {
    knex
      .select("*")
      .from("users")
      // .where(email === user.email)
      // .where(password = hashed version)
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
