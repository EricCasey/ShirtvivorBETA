"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/api/products/:id", (req, res) => {
    console.log(req.params);
    knex
      .select("*")
      .from("products")
      .where("user_id", req.params.id)
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
