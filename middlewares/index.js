const { globalErrorHandler } = require("./globalErrorHandler.middleware");
const { validateBody } = require("./validateBody.middleware");

module.exports = {
  validateBody,
  globalErrorHandler,
};
