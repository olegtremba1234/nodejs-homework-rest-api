const User = require("../../models/usersModel");

const currentUserController = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findOne(
    { _id },
    { email: 1, subscription: 1, _id: 0 }
  );
  res.json(user);
};

module.exports = {
  currentUserController,
};
