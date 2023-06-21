const express = require("express");
const {
  addReviews,
  getAllReviews,
  getReviewsByEmail,
} = require("../controller/reviews.controller");

const router = express.Router();

router.post("/add", addReviews);
router.get("/", getAllReviews);
router.get("/:email", getReviewsByEmail);

module.exports = router;
