/*
============================================
; Title:  Exercise 2.3
; Author: Loren Wetzel
; Date:   19 August 2019
; Modified By:
; Description: Demonstrates Express route behaviors
;===========================================
*/

// require statements
var express = require("express");
var http = require("http");

// initialize the application
var app = express();

//express routes when '/' request called
app.get("/", function (req, res) {
  res.end("welcome to the homepage!!!\n")
});

//express routes when '/about' request called
app.get("/about", function (req, res) {
  res.end("welcome to the about page!!!\n")
});

//express routes when '/contact' request called
app.get("/contact", function (req, res) {
  res.end("welcome to the contact page!!!\n")
});

//express routes when bad request is called
app.use(function (req, res) {
  res.statusCode = 404;
  res.end("404!!!\n");
});

// starts the server to listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log('Application started on port %s', 8080);
});
