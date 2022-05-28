const express = require("express");
const router = express.Router();
const { Event, validateEvent } = require("../models/event");

// POST : Create a new Event
router.post("/", async (req, res) => {
  const errorMessage = await validateEvent(req.body);
  if (errorMessage.message) {
    res.status(400).send(errorMessage.message);
  } else {
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
  }
});

// GET : All tournament Event
router.get("/", (req, res) => {
  Event.find()
    .then((tournament) => res.send(tournament))
    .catch((error) => {
      res.status(500).send("Something went wrong");
    });
});

// GET : Single Tournament Event by eventId
router.get("/:eventId", async (req, res) => {
  const tournament = await Event.findById(req.params.eventId);
  if (!tournament) {
    res.status(404).send("Event not in DataBase.");
  } else {
    res.send(tournament);
  }
});

// PUT : Update a Tournament Event
router.put("/:eventId", async (req, res) => {
  const updateTournament = await Event.findByIdAndUpdate(
    req.params.eventId,
    {
      name: req.body.eventName,
      sponser: req.body.sponser,
      prize: req.body.prize,
      eventTime: req.body.time,
      eventDate: req.body.date,
      price: req.body.price,
    },
    {
      new: true,
    }
  );
  if (!updatedTournament) {
    res.status(404).send("Tournament is not found in DB");
  } else {
    res.send(TournamentUpdated);
  }
});

// DELETE : Delete Tournament by EventId
router.delete("/:eventId", async (req, res) => {
  const TournamentDeleted = await Event.findByIdAndRemove(req.params.eventId);
  if (!tournament) {
    res.status(404).send("Event not in DataBase.");
  } else {
    res.send(TournamentDeleted);
  }
});

module.exports = router;
