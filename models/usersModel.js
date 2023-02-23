const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

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
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
  },
  { versionKey: false }
);

usersSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

usersSchema.methods.setAvatar = function (email) {
  this.avatarURL = gravatar.url(email, { s: "250", r: "x", d: "retro" }, true);
};

usersSchema.methods.setVerificationToken = function () {
  this.verificationToken = nanoid();
};

const User = mongoose.model("users", usersSchema);

module.exports = User;
