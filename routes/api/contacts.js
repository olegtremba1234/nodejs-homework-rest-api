const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares/validateBody.middleware");
const { addContactsSchema } = require("../../schemas/joiContactSchema");
const {
  ContactsFavoriteSchema,
} = require("../../schemas/contactsFavoriteSchema");

const { authMiddleware } = require("../../middlewares/");

const router = express.Router();

router.use(authMiddleware);

router.get("/", controllerExceptionWrapper(contactsController.listContacts));

router.get(
  "/:contactId",
  controllerExceptionWrapper(contactsController.getContactById)
);

router.post(
  "/",
  validateBody(addContactsSchema),
  controllerExceptionWrapper(contactsController.addContact)
);

router.delete(
  "/:contactId",
  controllerExceptionWrapper(contactsController.removeContact)
);

router.put(
  "/:contactId",
  validateBody(addContactsSchema),
  controllerExceptionWrapper(contactsController.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validateBody(ContactsFavoriteSchema),
  controllerExceptionWrapper(contactsController.updateStatusContact)
);

module.exports = router;
