/*
============================================
; Title:  wetzel-fruit.js
; Author: Loren Wetzel
; Date:   23 September 2019
; Description: Function used in a Chai test.
;===========================================
*/

//function to split comma separated strings into array
function fruits(str) {
  return str.split(",");
}

//export module for other modules to use
module.exports = fruits;
