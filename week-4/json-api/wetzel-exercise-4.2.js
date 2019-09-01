/*
============================================
; Title:  wetzel-exercise-4.2.js
; Author: Loren Wetzel
; Modified By:
; Date:   31 August 2019
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/

//declarations
var express = require("express");
var http = require("http");
var logger = require("morgan");

//assignments
var app = express();

//requests
app.use(logger('dev'));

app.get('/customer/:id', function(req,res){
  var id = parseInt(req.params.id, 10);

  res.json({

    firstName: 'Loren',
    lastName: 'Wetzel',
    empId: id
  });

});

http.createServer(app).listen(3030, function() {
  console.log("Application started on port 3030");
});
