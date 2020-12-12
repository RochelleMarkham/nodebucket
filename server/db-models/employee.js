/*======================================
; Title: employee.js
; Author: Professor Krasso
; Date: 12/2/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

//requires mongoose
const mongoose = require ('mongoose');
const Item = require('./item')

//sets up employee schema
let employeeSchema = mongoose.Schema({
  empId:      {type: String, unique: true, dropDups: true},
  firstname:  {type: String},
  lastname:   {type: String},
  todo: [Item],
  done: [Item]
});

//exports schema to MongoDB
module.exports = mongoose.model('Employee', employeeSchema);
