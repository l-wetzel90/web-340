/*
============================================
; Title:  wetzel-assignment-3.4.js
; Author: Loren Wetzel
; Date:   22 August 2019
; Modified By:
; Description: Base server configurations for
;              a fully working Express application.
;===========================================
*/

//requires for modules needed
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//create express app and assign it to variable
var app = express();

// uses EJS as view engine and serves the views out the views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//logs incoming requests via morgan middleware
app.use(logger("dev"));

//renders views when requested
app.get('/', function (req, res) {
  res.render('index', {
    message: 'Welcome to the Home Page'
  });
});

app.get('/about', function (req, res) {
  res.render('about', {
    message: 'This is the About Page'
  });
});

app.get('/contact', function (req, res) {
  res.render('contact', {
    message: 'Contact Page, where you can get ahold of us'
  });
});

app.get('/products', function (req, res) {
  res.render('products', {
    message: 'Check out our lovely Products Page'
  });
});

//route to 404 page if something else is requested
app.use(function (req, res) {
  res.status(404).render("404");
});

//create server
http.createServer(app).listen(3000, function () {
  console.log("Application started on port 3000");
});
