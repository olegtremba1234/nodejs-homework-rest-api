const User = require("../../models/usersModel");

const avatarsController = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findOne({ _id }, { avatarURL: 1, _id: 0 });
  res.json({ user });
};
module.exports = {
  avatarsController,
};
