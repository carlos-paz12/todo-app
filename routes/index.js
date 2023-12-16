const express = require("express");
const router = express.Router();
const UserController = require("../src/controllers/UserController");
const ListController = require("../src/controllers/ListController");
const TaskController = require("../src/controllers/TaskController");

// Rota principal
router.get("/", (req, res) => {
  res.render("index");
});

/* Rotas relacionadas ao usuário */
router.post("/user/store", UserController.store);
router.get("/user/:user_id", UserController.show);

/* Rotas relacionadas às listas do usuário */
router.post("/user/:user_id/lists/store", ListController.store);
router.get("/user/:user_id/lists", ListController.index);
// router.get("/user/:user_id/lists/:list_id", ListController.show);

/* Rotas relacionadas às tarefas das listas do usuário */
router.post("/user/:user_id/lists/:list_id/tasks/store", TaskController.store);
router.get("/user/:user_id/lists/:list_id/tasks", TaskController.index);
// router.get("/user/:user_id/lists/:list_id/tasks/:task_id", TaskController.show);

module.exports = router;
