"use strict";

const express = require('express');
const router  = express.Router();

const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/add-vote/:productId", (req, res) => {

    let productId = req.params.productId
    // console.log(req.body)
    let userID = req.body[0].user_id
    let votes = req.body[0].votes
    let currID = req.body[0].id
    // console.log(req.body)

    knex('products')
      .where("id", productId)
      .increment('votes', 1)
      .then((results) => {
        console.log(votes)
        if (votes > 299) {

          return (
            knex('products')
            .where('id', currID)
            .update({
              for_sale: true
            })
          )
        }
      }).then((results) => {
        if (votes > 299) {
          return (
            knex("users")
            .where("id", userID)
            .update({
              is_designer: true
            })
          )
        }
      })

      .then((results) => {
        if (votes > 299) {
          return (
            knex('products')
            .where('votes', '<', 300)
            .andWhere('for_sale', false)
            .update({
                votes: 0
            })
          )
        }
      }).then((results) => {
        knex
        .select("*")
        .from("products")
        .where("for_sale", false)
        .orderBy('votes', 'desc')
        .then((results) => {
          res.json(results);
        });
    });

  });
  return router;
}
