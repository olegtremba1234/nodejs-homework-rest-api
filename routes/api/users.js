const express = require("express");
const userController = require("../../controllers/users");
const { controllerExceptionWrapper } = require("../../helpers");
const {
  authMiddleware,
  validateBody,
  uploadMiddleWare,
} = require("../../middlewares/");
const avatarsController = require("../../controllers/avatars");
const { joiUsersSchema } = require("../../schemas/joiUsersSchema");
const {
  userSubscriptionSchema,
} = require("../../schemas/userSubscriptionSchema");

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

router.post(
  "/logout",
  controllerExceptionWrapper(userController.logOutController)
);

router.get(
  "/current",
  controllerExceptionWrapper(userController.currentUserController)
);

router.patch(
  "/",
  validateBody(userSubscriptionSchema),
  controllerExceptionWrapper(userController.subscriptionController)
);

router.patch(
  "/avatars",
  uploadMiddleWare.single("avatar"),
  controllerExceptionWrapper(avatarsController.avatarsController)
);

module.exports = router;
