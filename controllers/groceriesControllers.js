const express = require("express");

const groceries = express.Router();

const {
  getAllGroceries,
  getGrocery,
  createGrocery,
  updateGrocery,
  deleteGrocery,
} = require("../queries/groceries.js");

const validateGrocery = require("../validations/validateGrocery.js");

// INDEX
groceries.get("/", async (req, res) => {
  const allGroceries = await getAllGroceries();
  if (!allGroceries.error) {
    res.status(200).json(allGroceries);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//Show
groceries.get("/:id", async (req, res) => {
  const { id } = req.params;

  const { error, result } = await getGrocery(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Item not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

//CREATE
groceries.post("/", validateGrocery, async (req, res) => {
  const { error, result } = await createGrocery(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
    console.log(result);
  }
});

//update
groceries.put("/:id", validateGrocery, async (req, res) => {
  const { id } = req.params;

  const { error, result } = await updateGrocery(id, req.body);
  if (error) {
    res.status(500).json({ error: "Server error - Could not update grocery" });
  } else {
    res.status(200).json(result);
  }
});

// DELETE
groceries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await deleteGrocery(id);

  if (error) {
    res.status(404).json("Item not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = groceries;
