const jwt = require("jsonwebtoken");
const { NotAuthorizedError } = require("../helpers");
const User = require("../models/usersModel");

const authMiddleware = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (!token || tokenType !== "Bearer") {
      next(new NotAuthorizedError("Not authorized"));
    }

    const decodedToken = jwt.decode(token, process.env.SECRET);

    const user = await User.findById(decodedToken._id);
    if (!user || !user.token) {
      next(new NotAuthorizedError("Not authorized"));
    }

    req.token = token;
    req.user = decodedToken;
    next();
  } catch (error) {
    next(new NotAuthorizedError("Invalid token"));
  }
};

module.exports = {
  authMiddleware,
};
