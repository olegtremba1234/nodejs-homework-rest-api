const Joi = require("joi");

const addContactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .regex(/^[0-9]{10,15}$/)
    .messages({
      "string.pattern.base": `Phone number must have min. 10 and max. 15 digits.`,
    })
    .required(),
});

module.exports = {
  addContactsSchema,
};
