const service = require("../../service/contactsService");

const listContacts = async (req, res, next) => {
  const contacts = await service.listContacts();
  res.json(contacts);
};

module.exports = {
  listContacts,
};
