const Joi = require("joi");

const joiUsersSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9@*#]{4,15}$/)
    .messages({
      "string.pattern.base": `Password must consists of at least 4 characters and not more than 15 characters.`,
    })
    .required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

module.exports = {
  joiUsersSchema,
};
