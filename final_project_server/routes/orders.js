"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/api/orders/:user", (req, res) => {
    let userID = req.params.user
    console.log(userID)
    knex
      .select("*")
      .from("orders")
      .where("user_id", userID)
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}
