"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const cookieParser = require("cookie-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const lineitemsRoutes = require("./routes/lineitems");
const ordersRoutes = require("./routes/orders");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const designersRoutes = require("./routes/designers");
const designerProductsRoutes = require("./routes/designerProducts");

// User authentication zone

const session = require("express-session");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitiated: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const authRoutes = require('../routes/auth');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/auth', authRoutes);

  };

})(module.exports);

// Home page
// app.get("/", (req, res) => {
//   res.render("index");
// });

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.post("/api/register", registerRoutes(knex));
app.post("/api/login", loginRoutes(knex));
app.post("/api/logout", loginRoutes(knex));

// products endpoint
app.use("/api/products", productsRoutes(knex));

// orders endpoint
app.use("/api/orders", ordersRoutes(knex));

// line-items endpoint
app.use("/api/lineitems", lineitemsRoutes(knex));

// designers endpoint
app.use("/api/designers", designersRoutes(knex));

// used on the designers page for switching designers
app.get('/api/products/:id', designerProductsRoutes(knex));

//used to login current user with credentials


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
