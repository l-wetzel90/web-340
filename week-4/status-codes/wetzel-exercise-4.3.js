/*
============================================
; Title:  wetzel-exercise-4.2.js
; Author: Loren Wetzel
; Modified By:
; Date:   31 August 2019
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
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

app.get('/not-found',function(req,res){
res.status(404);
res.json({
  error: "We couldn't find what you was looking for."
});
});

app.get('/ok',function(req,res){
  res.status(200);
  res.json({
    message: "Alright, Alright, Alright. Everything is alright."
  })
});

app.get('/not-implemented',function(req,res){
  res.status(500);
  res.json({
    error: "We didn't do anything here yet."
  })
});

http.createServer(app).listen(3030, function() {
  console.log("Application started on port 3030!");
});
