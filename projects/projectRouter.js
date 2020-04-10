const express = require("express");
const db = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch(() => {
      res.status(500).json({ message: "unable to retrieve projects data" });
    });
});

router.post("/", (req, res) => {
  if (req.body.name === "" || req.body.description === "") {
    res
      .status(200)
      .json({
        message: "please provide a name and description for the project",
      });
  }

  db.insert(req.body)
    .then((proj) => {
      res.status(201).json({ message: "successfully added!", proj });
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "unable to add this project to the database" });
    });
});

module.exports = router;
