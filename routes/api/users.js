const express = require("express");
const userController = require("../../controllers/users");
const { controllerExceptionWrapper } = require("../../helpers");
const { authMiddleware, validateBody } = require("../../middlewares/");
const { joiUsersSchema } = require("../../schemas/joiUsersSchema");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiUsersSchema),
  controllerExceptionWrapper(userController.registerController)
);

router.post(
  "/login",
  validateBody(joiUsersSchema),
  controllerExceptionWrapper(userController.loginController)
);

router.use(authMiddleware);

router.post("/logout");

router.get("/current");

module.exports = router;
