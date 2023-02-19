const { authMiddleware } = require("./auth.middleware");
const { uploadMiddleWare } = require("./fileMiddleware");
const { globalErrorHandler } = require("./globalErrorHandler.middleware");
const { validateBody } = require("./validateBody.middleware");

module.exports = {
  validateBody,
  globalErrorHandler,
  authMiddleware,
  uploadMiddleWare,
};
