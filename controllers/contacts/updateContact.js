const { createHttpException } = require("../../helpers");
const service = require("../../service/contactsService");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const { _id: owner } = req.user;
  const result = await service.updateContact(
    contactId,
    {
      $set: { name, email, phone },
    },
    owner
  );
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  return res.json(result);
};

module.exports = {
  updateContact,
};
