const { createHttpException } = require("../../helpers");
const service = require("../../service/contactsService");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await service.removeContact(contactId, owner);
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  res.status(200).send(`contact deleted`);
};

module.exports = {
  removeContact,
};
