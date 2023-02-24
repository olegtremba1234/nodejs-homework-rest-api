const nodemailer = require("nodemailer");

const {
  MAIL_SENDER_HOST,
  MAIL_SENDER_PORT,
  MAIL_SENDER_MAIL,
  MAIL_SENDER_PASSWORD,
} = process.env;

const transporter = nodemailer.createTransport({
  host: MAIL_SENDER_HOST,
  port: MAIL_SENDER_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: MAIL_SENDER_MAIL, // generated ethereal user
    pass: MAIL_SENDER_PASSWORD, // generated ethereal password
  },
});

async function sendEmail(email, verificationToken) {
  try {
    await transporter.sendMail({
      from: MAIL_SENDER_HOST,
      to: email,
      subject: "Verify your email",
      html: `You're on your way!<br>
     Let's confirm your email address.<br>
     By clicking on <a href=http://localhost:3000/api/users/verify/${verificationToken}>This link</a>, you are confirming your email address.`,
    });

    console.log("Nodemailer sent email");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  sendEmail,
};
