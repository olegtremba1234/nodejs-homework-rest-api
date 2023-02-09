const Contact = require("../../models/contactsModel");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  if (favorite) {
    const contacts = await Contact.find({ owner, favorite }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email");
    res.json(contacts);
    return;
  }
  const contacts = await Contact.find({ owner }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");

  res.json(contacts);
};

module.exports = {
  listContacts,
};
