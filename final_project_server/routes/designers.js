"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("username", "id")
      .from("users")
      // .where("is_designer", true)
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
