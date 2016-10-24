"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/api/register", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
