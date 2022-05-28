const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const eventRoute = require("./routes/event");
const winston = require("winston");

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/events", eventRoute);

// Create Logger
const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
    }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" }),
  ],
});

// Connect mongoDb Atlas
mongoose
  .connect(process.env.Mongoose_Url, { useNewUrlParser: true })
  .then(() => {
    logger.info("Connected MongoDB Atlas.");
  })
  .catch((error) => {
    logger.error(error.message);
  });

app.listen(PORT, () => {
  logger.warn(`Server started listening port : ${PORT}`);
});
