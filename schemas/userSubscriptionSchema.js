const Joi = require("joi");

const userSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = {
  userSubscriptionSchema,
};
