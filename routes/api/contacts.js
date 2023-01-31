const express = require("express");
const contactsController = require("../../controllers");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares/validateBody.middleware");
const { addContactsSchema } = require("../../service/schemas/addContactSchema");

const router = express.Router();

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

router.patch("/:contactId/favorite");

module.exports = router;
