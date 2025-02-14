const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/usersModel");
const { createHttpException } = require("../../helpers");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, verify: true });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createHttpException(401, "Email or password is wrong");
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
    expiresIn: "1h",
  });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({ status: "success", token });
};

module.exports = {
  loginController,
};
