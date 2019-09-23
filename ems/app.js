/*
============================================
; Title:  app.js
; Author: Loren Wetzel
; Modified By:
; Date:   6 September 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

//variables/required
var express = require("express");
var http = require("http");
var path = require("path");

var mongoose = require("mongoose");

var logger = require("morgan");

var Employee = require("./models/employee");

//mLab connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1-7jtao.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{
  useMongoClient: true
});
mongoDB.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "\nMongoDB connection error: "));
db.once("open", function(){
  console.log("\nApplication connected to mLab MongoDB instance\n");
});

//application
var app = express();
app.use(logger("short"));

//model
var employee = new Employee({
  firstName: "Loren",
  lastName: "Wetzel"
});

//views
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

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
  console.log("\nApp started. localhost:3030 copy and paste to see it !!!\n");
});
