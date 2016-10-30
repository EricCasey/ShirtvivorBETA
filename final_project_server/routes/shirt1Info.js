"use strict";

const express = require('express');
const router  = express.Router();
const fetchUrl = require("fetch").fetchUrl;

module.exports = (knex) => {

  router.get("/api/shirt1info", (req, res) => {

// https://api.theprintful.com/products/variant/270

    fetchUrl('https://api.theprintful.com/products/variant/270', function(error, meta, body){
      let allData = body.toString();
      res.json(allData);
      return allData;
    });


  });

  return router;
}
