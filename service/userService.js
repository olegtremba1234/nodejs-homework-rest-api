const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../schemas/usersModel");
const { createHttpException } = require("../helpers");

const regitration = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw createHttpException(409, "Email in use");
  }
  const newUser = new User({ email, password });
  newUser.setPassword(password);
  await newUser.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createHttpException(401, "Email or password is wrong");
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "1h",
  });

  await User.findByIdAndUpdate(user._id, { token });

  return token;
};

module.exports = {
  regitration,
  login,
};
