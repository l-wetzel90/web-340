/*
============================================
; Title:  Assignment 2.4
; Author: Loren Wetzel
; Date:   19 August 2019
; Modified By:
; Description: Creates a Node.js server and returns
;              the index.ejs page
;===========================================
*/

// require statements
const http = require('http');
const express = require('express');
const path = require('path');

// initialize the application
let app = express();

app.set('views', path.resolve(__dirname, 'views')); // Tell Express the views are in the 'views' directory
app.set('view engine', 'ejs'); // Tell Express to use the EJS view engine

app.get('/', function (req, res) {
  res.render('index', {
    firstName: 'Loren',
    lastName: 'Wetzel',
    address: 'Nebraska City, NE'
  });
});

http.createServer(app).listen(8080, function () {
  console.log('Ejs-Views app started on port 8080.');
});
