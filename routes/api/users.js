const express = require("express");
const userController = require("../../controllers/users");
const { controllerExceptionWrapper } = require("../../helpers");
const {
  authMiddleware,
  validateBody,
  uploadMiddleWare,
} = require("../../middlewares/");
const avatarsController = require("../../controllers/avatars");
const {
  joiUsersSchema,
  userSubscriptionSchema,
  emailVerificationSchema,
} = require("../../schemas/");

const router = express.Router();

router.post(
  "/register",
  validateBody(joiUsersSchema),
  controllerExceptionWrapper(userController.registerController)
);

router.get(
  "/verify/:verificationToken",
  controllerExceptionWrapper(userController.verifyEmail)
);

router.post(
  "/verify",
  validateBody(emailVerificationSchema),
  controllerExceptionWrapper(userController.resendVerifyEmail)
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
