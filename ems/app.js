/*
============================================
; Title:  app.js
; Author: Loren Wetzel
; Modified By:
; Date:   6 September 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function (req, res) {
  res.render("index", {
    title: "E.M.S."
  });
});

app.get("/list", function (req, res) {
  res.render("list", {
    title: "Employee Records"
  });
});

app.get("/new", function (req, res) {
  res.render("new", {
    title: "New Entry"
  });
});

app.get("/view", function (req, res) {
  res.render("view", {
    title: "Individual Employee Information"
  });
});

http.createServer(app).listen(3030, function () {
  console.log("App started. localhost:3030 copy and paste to see it !!!");
});
