/*======================================
; Title: item.js
; Author: Professor Krasso
; Date: 12/9/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

const mongoose = require('mongoose');

//sets up schema for tasks
let itemSchema = mongoose.Schema({
  text: {type: String}
});

module.exports = itemSchema;
