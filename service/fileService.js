const path = require("path");
const fs = require("fs");
const { createFolderIsNotExist, createHttpException } = require("../helpers");
const Jimp = require("jimp");
const User = require("../models/usersModel");

const AVATAR_DIR = path.join(process.cwd(), "public/avatars");

const uploadAvatar = async (userId, { temporaryName, originalname }) => {
  createFolderIsNotExist(AVATAR_DIR);

  const [, extension] = originalname.split(".");
  const newFileName = `${"avatar"}-${userId}.${extension}`;
  const newFilePath = path.join(AVATAR_DIR, newFileName);

  Jimp.read(temporaryName, (err, userAvatar) => {
    if (err) throw createHttpException(400, "Invalid file");
    userAvatar.resize(250, 250).quality(100).write(newFilePath);
    fs.unlink(temporaryName, (err) => {
      if (err) throw createHttpException;
    });
  });

  const avatarURL = path.join("/avatars", newFileName);

  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { avatarURL } },
    { new: true }
  );

  if (!user) {
    throw createHttpException(404, "Not found!");
  }

  return user;
};

module.exports = {
  uploadAvatar,
};
