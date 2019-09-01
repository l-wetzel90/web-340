/*
============================================
; Title:  wetzel-assignment-4.4.js
; Author: Loren Wetzel
; Modified By:
; Date:   31 August 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

//imports
var express = require("express");
var http = require("http");
var logger = require("morgan");

//assignments
var app = express();

//requests
app.use(logger('dev'));

app.get('/', function (req, res) {
  res.send("Look at you... all invoking an HTTP GET Request and stuff")
});

app.put('/', function (req, res) {
  res.send("Look at you... all invoking an HTTP PUT Request and stuff")
});

app.post('/', function (req, res) {
  res.send("Look at you... all invoking an HTTP POST Request and stuff")
});

app.delete('/', function (req, res) {
  res.send("Look at you... all invoking an HTTP DELETE Request and stuff")
});

http.createServer(app).listen(3030, function () {
  console.log("The app is started on port 3030!");
});
