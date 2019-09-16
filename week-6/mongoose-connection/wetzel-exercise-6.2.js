/*
============================================
; Title:  wetzel-exercise-6.2
; Author: Loren Wetzel
; Modified By:
; Date:   15 September 2019
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

//variables/require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


//mLab connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1-7jtao.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{
  useMongoClient: true
});

mongoDB.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance");
});


//application
var app = express();
app.use(logger("short"));


//create server
http.createServer(app).listen(3030, function () {
  console.log("It actually worked and started on port localhost:3030 !!!");
});
