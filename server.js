const express = require("express");
const cors = require("cors");

const projectRouter = require("./projects/projectRouter");
const actionRouter = require("./actions/actionRouter");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
