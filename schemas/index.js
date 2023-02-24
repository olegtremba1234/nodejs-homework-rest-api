const { ContactsFavoriteSchema } = require("./contactsFavoriteSchema");
const { emailVerificationSchema } = require("./emailVerificationSchema");
const { addContactsSchema } = require("./joiContactSchema");
const { joiUsersSchema } = require("./joiUsersSchema");
const { userSubscriptionSchema } = require("./userSubscriptionSchema");

module.exports = {
  ContactsFavoriteSchema,
  emailVerificationSchema,
  addContactsSchema,
  joiUsersSchema,
  userSubscriptionSchema,
};
