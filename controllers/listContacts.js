const contactsRepository = require("../models/contacts");

const listContacts = async (req, res, next) => {
  const contacts = await contactsRepository.listContacts();
  res.json(contacts);
};

module.exports = {
  listContacts,
};
