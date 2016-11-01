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
    console.log(req.body)
    let productName = req.body.productName;
    let productDescription = req.body.productName;
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
        console.log(userinfo)
        knex('products')
          .insert({
            user_id: userinfo,
            image: imgurURL,
            name: productName,
            price_cents: 3999,
            description: productDescription,
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
