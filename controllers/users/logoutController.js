const User = require("../../models/usersModel");

const logOutController = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(204).send({ message: "successfully logged out" });
};

module.exports = {
  logOutController,
};
