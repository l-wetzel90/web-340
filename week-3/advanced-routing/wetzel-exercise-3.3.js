/*
============================================
; Title:  wetzel-exercise-3.3.js
; Author: Loren Wetzel
; Date:   22 August 2019
; Modified By:
; Description: Demonstrates advanced routing
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

//match request coming in to employee id's
app.get("/:employeeId", function (req, res) {
  var employeeId = parseInt(req.params.employeeId, 10);//convert to integer

  res.render("index", {
    employeeId: employeeId
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
