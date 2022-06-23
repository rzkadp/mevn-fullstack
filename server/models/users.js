const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const postSchema = new Schema({
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

postSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (err) {
    next(err);
  }
})

postSchema.post('save', async function(next) {
  try {
    console.log("called after saving user");
  } catch (err) {
    next(err);
  }
})

const Users = mongoose.model("Users", postSchema);
module.exports = Users;
