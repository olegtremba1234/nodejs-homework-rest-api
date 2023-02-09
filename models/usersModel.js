const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false }
);

usersSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

const User = mongoose.model("users", usersSchema);

module.exports = User;
