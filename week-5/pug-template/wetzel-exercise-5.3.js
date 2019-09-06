/*
============================================
; Title:  wetzel-exercise-5.3.js
; Author: Loren Wetzel
; Modified By:
; Date:   6 September 2019
; Description: Demonstrates the Pug view engine.
;===========================================
*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","pug");

app.get("/",function(req,res){
  res.render("index",{
    message: "Wetzel's Pug based example page!!!"
  });
});

http.createServer(app).listen(3030, function () {
  console.log("It actually worked and started on port localhost:3030 !!!")
});
