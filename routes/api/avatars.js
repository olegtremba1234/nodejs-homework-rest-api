const express = require("express");
const multer = require("multer");
const path = require("path");
const { nanoid } = require("nanoid");

const avatarsController = require("../../controllers/avatars");
const { controllerExceptionWrapper } = require("../../helpers");
const { authMiddleware } = require("../../middlewares/");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./tmp"));
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    cb(null, `${nanoid()}.${extension}`);
  },
});
const uploadMiddleWare = multer({ storage });

router.use(authMiddleware);

router.patch(
  "/avatars",
  uploadMiddleWare.single("avatar"),
  controllerExceptionWrapper(avatarsController.avatarsController)
);
router.use("/download", express.static("./public/avatars"));

module.exports = router;
