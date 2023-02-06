const service = require("../../service");

const listContacts = async (req, res, next) => {
  const contacts = await service.listContacts();
  res.json(contacts);
};

module.exports = {
  listContacts,
};
