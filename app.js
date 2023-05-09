// DEPENDENCIES
const express = require("express");
const groceryController = require("./controllers/groceryController.js");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());
app.use(express.json()); // json middleware parses incoming requests with JSON payloads


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Shopping Cart App");
});

app.use("/groceries", groceryController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found!" });
});

// EXPORT
module.exports = app;