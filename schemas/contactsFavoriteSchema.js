const Joi = require("joi");

const ContactsFavoriteSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string()
    .regex(/^[0-9]{10,15}$/)
    .messages({
      "string.pattern.base": `Phone number must have min. 10 and max. 15 digits.`,
    }),
  favorite: Joi.boolean()
    .messages({ message: "missing field favorite" })
    .required(),
});

module.exports = {
  ContactsFavoriteSchema,
};
