const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const { createHttpException } = require("../helpers");

const contactsPath = path.join(__dirname, "./contacts.json");

const updateContactsList = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  const result = JSON.parse(contacts);
  return result;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw createHttpException(404, "Contact is not found!");
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();

  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    throw createHttpException(404, "Contact is not found!");
  }
  contacts.splice(index, 1);
  await updateContactsList(contacts);

  return contacts[index];
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await updateContactsList(contacts);
  return newContact;
};

const updateContact = async (contactId, data) => {
  const contacts = await listContacts();

  const contact = contacts.find((contact) => contact.id === contactId);
  if (!contact) {
    throw createHttpException(404, "Contact is not found!");
  }

  contacts[contact] = { contactId, ...data };
  await updateContactsList(contacts);

  console.log("this is index>>>>", contact);
  return contacts[contact];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
