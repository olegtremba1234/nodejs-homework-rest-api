const { createHttpException } = require("../../helpers");
const service = require("../../service/contactsService");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;
  const result = await service.updateStatusContact(
    contactId,
    {
      $set: { favorite },
    },
    owner
  );
  if (!result) {
    throw createHttpException(404, `Not found contact by id:${contactId}`);
  }
  return res.json(result);
};

module.exports = {
  updateStatusContact,
};
