const express = require("express");
const userController = require("../../controllers/users");
const { controllerExceptionWrapper } = require("../../helpers");

const router = express.Router();

router.post(
  "/register",
  controllerExceptionWrapper(userController.registerController)
);

router.post(
  "/login",
  controllerExceptionWrapper(userController.loginController)
);

router.post("/logout");

router.get("/current");

module.exports = router;
