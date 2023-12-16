const path = require("path");
const express = require("express");
const router = require("../routes");
const app = express();

app.use(express.json());
app.use("/todo-app", router);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "resources", "views"));

module.exports = app;
