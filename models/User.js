const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const UserSchema = new Schema({
  username: {
    type: String,
    // UNIQUE
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    // UNIQUE
    // Must match a valid email address (look into Mongoose's matching validation)
  },
  //   thoughts: [_id values referencing the thought model],
  //   friends: [_id values referencing the user model]
});

model.exports = User;
