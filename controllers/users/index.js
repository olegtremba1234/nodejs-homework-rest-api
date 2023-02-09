const { currentUserController } = require("./currentUserController");
const { loginController } = require("./loginController");
const { logOutController } = require("./logoutController");
const { registerController } = require("./registerController");
module.exports = {
  loginController,
  registerController,
  logOutController,
  currentUserController,
};
