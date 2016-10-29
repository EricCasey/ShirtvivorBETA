"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where("is_designer", false)
      .whereNot({image_submission: "empty"})
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
