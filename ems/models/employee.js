/*
============================================
; Title:  employee.js
; Author: Loren Wetzel
; Modified By:
; Date:   23 September 2019
; Description: setup mongoose schema/model
;===========================================
*/

//variable/required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({

  firstName: String,
  lastName: String

});

//define employee model
var Employee = mongoose.model("Employee", employeeSchema);

// make the employeeSchema accessible

module.exports = Employee;
