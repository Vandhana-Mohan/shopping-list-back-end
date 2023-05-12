const express = require("express");
const reviews = express.Router({ mergeParams: true });
const validateReview = require("../validations/validateReview.js");
const {
  getAllReviewsByGrocery,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews.js");

// index
reviews.get("/", async (req, res) => {
 
  const { groceryId } = req.params;
  const { error, result } = await getAllReviewsByGrocery(groceryId);
  if (error) {
    console.log(error)
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// show
reviews.get("/:reviewId", async (req, res) => {
  console.log(req.params);
  const { reviewId } = req.params;
  const { error, result } = await getReview(reviewId);
  if (error?.code === 0) {
    res.status(404).json({ error: "Review not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// create
reviews.post("/", validateReview, async (req, res) => {

    
  const { error, result } = await createReview(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});

// update Review
reviews.put("/:reviewId", validateReview, async (req, res) => {
  const { reviewId } = req.params;
  const { error, result } = await updateReview(reviewId, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});
//DELETE

reviews.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { error, result } = await deleteReview(reviewId);
  if (error) {
    res.status(404).json("Review not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = reviews;
