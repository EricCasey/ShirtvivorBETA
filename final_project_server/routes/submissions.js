"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("products")
      .where("for_sale", false)
      .orderBy('votes', 'desc')
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
