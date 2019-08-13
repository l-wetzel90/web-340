/*
============================================
; Title:  Exercise 1.3
; Author: Loren Wetzel
; Date:   10 August 2019
; Modified By:
; Description: Using functions, create a cell phone object
;===========================================
*/
'use strict';

//header
var header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 1.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 https:
 www.example.com
 name=wetzel

*/

// start program

//variable declaration
var url = require("url");
var parsedURL = url.parse("https://www.example.com/profile?name=wetzel");

//output parsed URL
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
