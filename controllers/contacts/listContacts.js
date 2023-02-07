const service = require("../../service/contactsService");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const contacts = await service.listContacts(owner);
  res.json(contacts);
};

module.exports = {
  listContacts,
};
