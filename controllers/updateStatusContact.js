const { createHttpException } = require("../helpers");
const service = require("../service");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await service.updateStatusContact(contactId, {
    $set: { favorite },
  });
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  return res.json(result);
};

module.exports = {
  updateStatusContact,
};
