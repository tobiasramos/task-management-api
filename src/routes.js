const express = require("express");
const UserController = require("./controller/UserController");
const TaskController = require("./controller/TaskController");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Servidor rodando");
});

routes.post("/login", UserController.loginUser);
routes.post("/register", UserController.registerUser);

routes.get("/task", TaskController.index);
routes.post("/task", TaskController.create);
routes.delete("/task/:id", TaskController.delete);
routes.put("/task", TaskController.update);

module.exports = routes;
