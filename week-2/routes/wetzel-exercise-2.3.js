/*
============================================
; Title:  Exercise 2.3
; Author: Loren Wetzel
; Date:   19 August 2019
; Modified By:
; Description: Demonstrates Express route behaviors
;===========================================
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/", function (req, res) {
  res.end("welcome to the homepage!!!\n")
});

app.get("/about", function (req, res) {
  res.end("welcome to the about page!!!\n")
});

app.get("/contact", function (req, res) {
  res.end("welcome to the contact page!!!\n")
});

app.use(function (req, res) {
  res.statusCode = 404;
  res.end("404!!!\n");
});

http.createServer(app).listen(8080, function () {
  console.log('Application started on port %s', 8080);
});
