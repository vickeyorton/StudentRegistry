const mongoose = require("mongoose");
const Event = require("./event");
// UserSchema

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  event: Event.schema,
  eventDate: {
    type: String,
  },
  paid: {
    type: Number,
  },
});

module.exports = new mongoose.model("User", UserSchema);
