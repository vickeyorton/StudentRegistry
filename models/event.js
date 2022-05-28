const mongoose = require("mongoose");
const yup = require("yup");

// EventSchema

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  sponser: {
    type: String,
  },
  prize: {
    type: Number,
  },
  eventTime: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const validateEvent = (events) => {
  const schema = yup.object().shape({
    eventName: yup.string().required().min(3).max(25),
    sponser: yup.string().required(),
    prize: yup.number().required(),
    time: yup.string().required(),
    date: yup.date().required(),
    price: yup.number().required(),
  });

  return schema
    .validate(events)
    .then((events) => events)
    .catch((error) => {
      return { message: error.message };
    });
};

exports.Event = new mongoose.model("Event", EventSchema);
exports.validateEvent = validateEvent;
