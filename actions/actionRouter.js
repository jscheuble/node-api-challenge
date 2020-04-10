const express = require("express");
const db = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve actions data" });
    });
});

router.get("/:id", validateActionId, (req, res) => {
  db.get(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve this action" });
    });
});

function validateActionId(req, res, next) {
  db.get(req.params.id)
    .then((action) => {
      action ? next() : res.status(400).json({ message: "invalid action id" });
    })
    .catch(() => {
      res.status(500).json({ message: "unable to validate action id" });
    });
}

module.exports = router;
