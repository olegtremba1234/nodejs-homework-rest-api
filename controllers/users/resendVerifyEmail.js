const { createHttpException } = require("../../helpers");
const User = require("../../models/usersModel");
const { sendEmailVerificationLetter } = require("../../service/mailService");
// const { sendEmail } = require("../../service/nodemailer");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email, verify: false });
  if (!user) {
    throw createHttpException(400, "Verification has already been passed");
  }
  await sendEmailVerificationLetter(email, user.verificationToken); // SendGrid
  //   await sendEmail(email, user.verificationToken); // Nodemailer

  res.status(200).json("Verification email sent");
};

module.exports = {
  resendVerifyEmail,
};
