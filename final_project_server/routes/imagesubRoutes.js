"use strict";

const express = require('express');
const router = express.Router();
var chance = require('chance').Chance();
const bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json())

module.exports = (knex) => {

  router.post("/api/imagesub", (req, res) => {
    let imgurURL = req.body.image;
    let token = req.body.token;
    let currUser = null;

    knex
      .select("*")
      .from("sessions")
      .where("token", token)
      .then((hasSession) => {
        if (hasSession[0]) {
          currUser = hasSession[0]
          return currUser.user_id
        }
      })
      .then((userinfo) => {
        knex('products')
          // .returning('*')
          .where('user_id', userinfo)
          .insert({
            image: imgurURL,
            name: newProduct.name,
            price_cents: 3999,
            description: newProduct.description,
            featured: false,
            votes: 0,
            for_sale: false
          })
          .then((results) => {
            res.json(results)
          })
      })
  })

  return router;
}
