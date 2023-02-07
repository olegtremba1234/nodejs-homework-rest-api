const Contact = require("../schemas/contactsModel");

const listContacts = async (owner) => {
  return Contact.find({ owner });
};

const getContactById = (contactId, owner) => {
  return Contact.findOne({ _id: contactId, owner });
};

const addContact = ({ name, email, phone, favorite }, owner) => {
  return Contact.create({ name, email, phone, favorite, owner });
};

const updateContact = (id, fields, owner) => {
  return Contact.findOneAndUpdate({ _id: id, owner }, fields, { new: true });
};

const removeContact = (id, owner) => {
  return Contact.findOneAndRemove({ _id: id, owner });
};

const updateStatusContact = (id, fields, owner) => {
  return Contact.findOneAndUpdate({ _id: id, owner }, fields, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
