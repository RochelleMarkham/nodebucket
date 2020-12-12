const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
  text: {type: String}
});

module.exports = itemSchema;
