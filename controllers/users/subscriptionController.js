const User = require("../../models/usersModel");

const subscriptionController = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  await User.findByIdAndUpdate(_id, { $set: { subscription } }, { new: true });
  res.json(`Your subscription updatet to: ${subscription} `);
};

module.exports = {
  subscriptionController,
};
