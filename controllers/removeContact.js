const service = require("../service");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  await service.removeContact(contactId);
  res.status(200).send(`contact deleted`);
};

module.exports = {
  removeContact,
};
