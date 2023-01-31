const service = require("../service");

const updateContact = async (req, res, next) => {
  const contact = req.body;
  const result = await service.updateContact(contact._id, contact);
  return res.json(result);
};

module.exports = {
  updateContact,
};
