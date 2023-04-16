const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/I-have-no-idea');

var schema = mongoose.Schema(
 {
    content: {
     gamename: String,
     review: String
    }
  }
)

module.exports = mongoose.model('i-have-no-idea', schema);