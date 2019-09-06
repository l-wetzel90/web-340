/*
============================================
; Title:  wetzel-exercise-5.2.js
; Author: Loren Wetzel
; Modified By:
; Date:   5 September 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var n = ["Loren", "Romeo", "Ashton", "Aurora"];

app.get("/", function (req, res) {
  res.render("index", {
    names: n
  });
});

http.createServer(app).listen(3030, function () {
  console.log("It actually worked and started on port localhost:3030 !!!");
});
