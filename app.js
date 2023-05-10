const express = require("express");
const cors = require("cors");
const groceriesControllers = require("./controllers/groceriesControllers.js");
//CONFIG
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //parses incoming json request

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to shopping cart");
});
app.use("/groceries", groceriesControllers);
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
