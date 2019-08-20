/*
============================================
; Title:  Exercise 2.2
; Author: Loren Wetzel
; Date:   19 August 2019
; Modified By:
; Description: Creates a new server and listens
;              on port 8080.
;===========================================
*/

// require statements
var express = require("express");
var http = require("http");

// initialize the application
var app = express();

// express middleware
app.use(function (req, res) {
  console.log("In comes a request to: " + req.url);

  res.end("Hello world");
});

// starts the server to listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log('Application started on port %s', 8080);
});
