const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const {
  globalErrorHandler,
} = require("./middlewares/globalErrorHandler.middleware");

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

app.use(express.json());
app.use(cors());
app.use(logger(formatsLogger));

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);
app.use("/api/users", express.static("./public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_HOST;

mongoose.set("strictQuery", false);
mongoose
  .connect(uriDb, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });

module.exports = app;
