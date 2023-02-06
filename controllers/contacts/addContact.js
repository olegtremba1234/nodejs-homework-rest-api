// const contactsRepository = require("../models/contacts");
const service = require("../../service");

const addContact = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body;
  const result = await service.addContact({ name, email, phone, favorite });
  res.status(201).json(result);
};

module.exports = {
  addContact,
};
