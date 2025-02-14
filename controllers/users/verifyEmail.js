const { createHttpException } = require("../../helpers");
const User = require("../../models/usersModel");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw createHttpException(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });
  res.status(200).json("Verification successful");
};

module.exports = {
  verifyEmail,
};
