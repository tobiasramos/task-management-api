const express = require("express");
const TaskController = require("./controller/TaskController");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Servidor rodando");
});

routes.get("/task", TaskController.index);
routes.post("/task", TaskController.create);
routes.delete("/task/:id", TaskController.delete);
routes.put("/task", TaskController.update);

module.exports = routes;
