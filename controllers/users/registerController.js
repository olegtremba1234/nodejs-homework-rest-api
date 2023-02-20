const User = require("../../models/usersModel");
const { createHttpException } = require("../../helpers");

const registerController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createHttpException(409, "Email in use");
  }

  const newUser = new User({ email, password });
  newUser.setPassword(password);
  newUser.setAvatar(email);

  await newUser.save();

  res.json({ status: "success" });
};

module.exports = {
  registerController,
};
