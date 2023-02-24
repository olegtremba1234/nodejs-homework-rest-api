const User = require("../../models/usersModel");
const { createHttpException } = require("../../helpers");
const { sendEmailVerificationLetter } = require("../../service/mailService");
// const { sendEmail } = require("../../service/nodemailer");

const registerController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createHttpException(409, "Email in use");
  }

  const newUser = new User({ email, password });
  newUser.setPassword(password);
  newUser.setAvatar(email);
  newUser.setVerificationToken();

  await newUser.save();

  await sendEmailVerificationLetter(email, newUser.verificationToken); // SendGrid Work!
  // await sendEmail(email, newUser.verificationToken); // Nodemailer Work!

  res.json({ status: "success" });
};

module.exports = {
  registerController,
};
