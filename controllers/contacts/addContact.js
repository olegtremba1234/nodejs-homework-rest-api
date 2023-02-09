// const contactsRepository = require("../models/contacts");
const service = require("../../service/contactsService");

const addContact = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body;
  const { _id: owner } = req.user;
  const result = await service.addContact(
    { name, email, phone, favorite },
    owner
  );
  res.status(201).json(result);
};

module.exports = {
  addContact,
};
