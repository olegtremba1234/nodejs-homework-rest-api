const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, MAIL_SENDER_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailVerificationLetter = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: MAIL_SENDER_EMAIL,
    subject: "Verify your email",
    text: `You're on your way!<br>
     Let's confirm your email address.<br>
     By clicking on <a href=http://localhost:3000/api/users/verify/${verificationToken}>This link</a>, you are confirming your email address.`,
    html: `You're on your way!<br>
     Let's confirm your email address.<br>
     By clicking on <a href=http://localhost:3000/api/users/verify/${verificationToken}>This link</a>, you are confirming your email address.`,
  };
  await sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendEmailVerificationLetter,
};
