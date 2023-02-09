const createHttpException = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

class NotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  createHttpException,
  NotAuthorizedError,
};
