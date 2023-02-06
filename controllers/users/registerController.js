const { regitration } = require("../../service/userService");

const registerController = async (req, res) => {
  const { email, password } = req.body;

  await regitration(email, password);
  res.json({ status: "success" });
};

module.exports = {
  registerController,
};
