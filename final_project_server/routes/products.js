"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("products")
      .orderBy("name", "asc")
      .where("for_sale", true)
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
