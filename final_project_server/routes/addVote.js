"use strict";

const express = require('express');
const router  = express.Router();

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/add-vote/:productId", (req, res) => {

    let productId = req.params.productId

    knex('products')
      .where("id", productId)
      .increment('votes', 1)
      .then((results) => {
        knex
        .select("*")
        .from("products")
        .where("for_sale", false)
        .orderBy('votes', 'desc')
        .then((results) => {
          console.log(results)
          res.json(results);
        });
    });

  });
  return router;
}
