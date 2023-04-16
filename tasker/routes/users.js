const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0/tasker');

var schema = mongoose.Schema(
 {
    content: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('tasks', schema);