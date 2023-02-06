const { createHttpException } = require("../../helpers");
const service = require("../../service");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await service.removeContact(contactId);
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  res.status(200).send(`contact deleted`);
};

module.exports = {
  removeContact,
};
