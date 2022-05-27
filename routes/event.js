const express = require("express");
const router = express.Router();
const Event = require("../models/event");

// POST : Create a new Event
router.post("/", (req, res) => {
  tournament = new Event({
    name: req.body.eventName,
    sponser: req.body.sponser,
    prize: req.body.prize,
    eventTime: req.body.time,
    eventDate: req.body.date,
    price: req.body.price,
  });

  tournament
    .save()
    .then((tournament) => {
      res.send(tournament);
    })
    .catch((error) => {
      res.status(500).send("Event was not stored in DB");
    });
});

module.exports = router;