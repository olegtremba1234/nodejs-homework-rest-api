const { createHttpException } = require("../../helpers");
const service = require("../../service/contactsService");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await service.getContactById(contactId, owner);
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  res.json(result);
};

module.exports = {
  getContactById,
};
