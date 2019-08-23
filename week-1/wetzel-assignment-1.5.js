/*
============================================
; Title:  Assignment 1.5
; Author: Loren Wetzel
; Date:   12 August 2019
; Modified By:
; Description: Create Node.js server
;===========================================
*/
'use strict';

var header = require('../header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 1.5"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 I think I am starting to get the hang of Node and Express

*/

// start program

//create variables
var http = require("http");

//function that handles incoming HTTP request
function requestHandler(req, res){

    var body = "I think that I am starting to get the hang of Node and Express";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);
}
// create server
var server = http.createServer(requestHandler);

//starts server at port 8080
server.listen(8080);

//end program
