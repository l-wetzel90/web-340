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
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");


//mLab connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1-7jtao.mongodb.net/ems?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoDB.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "\nMongoDB connection error: "));
db.once("open", function () {
  console.log("\nApplication connected to mLab MongoDB instance\n");
});


//set up CSRF protection
var csrfProtection = csrf({ cookie: true });


//application
var app = express();


//morgan library
app.use(logger("short"));


//body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


//cookie parser
app.use(cookieParser());


//using helmet to help prevent XSS attacks
app.use(helmet.xssFilter());


//CSRF protection
app.use(csrfProtection);


//intercepts all incoming requests and adds a CSRF token to the response
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});


//view engine, view directory path and server port
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3030);


//routing
//home
app.get("/", function (req, res) {
  res.render("index", {
    title: "E.M.S.",
  });
});


//creates new employee
app.get("/new", function (req, res) {
  res.render("new", {
    title: "New Entry"
  });
});


//process forms
app.post("/process", function (req, res) {
  if (!req.body.txtFirstName && !req.body.txtLastName) {
    res.status(400).send("Entries must have a first and last name");
    return;
  }

  //get the request's form data
  var fName = req.body.txtFirstName;
  var lName = req.body.txtLastName;
  console.log("\n" + fName + " " + lName);

  //model
var employee = new Employee({
  firstName: fName,
  lastName: lName
});

  //save
  employee.save(function (err) {
    if (err) throw err;
    console.log("\n" + fName + " " + lName + " saved successfully!!!!");
  });
  res.redirect("/list");
});


//shows list of employees
app.get("/list", function (req, res) {

  Employee.find({}, function (error, employees) {
    if (error) throw error;

    res.render("list", {
      title: "Employee Records",
      employees: employees
    });
  });
});


//get individual employee
app.get("/view/:queryName", function (req, res) {
  var queryName = req.params.queryName;

  Employee.find({ 'firstName': queryName }, function (error, employees) {
    if (error) throw error;

    if (employees.length > 0) {
      res.render("view", {
        title: "Individual Employee Information",
        employee: employees
      });
    } else {
      res.redirect("/list");
    }
  });
});


http.createServer(app).listen(app.get("port"), function () {
  console.log("\nApp started. localhost:" + app.get("port") + " copy and paste to see it !!!\n");
});
