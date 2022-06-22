const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
      name: String,
      address: String,
      username: String,
      password: String,
      image: String,
      created: {
        type: Date,
        default: Date.now
      }
    });

module.exports = mongoose.model("Users", postSchema);
