const Reviews = require("../models/reviews.model");

const addReviews = async (req, res) => {
  try {
    const newReviews = new Reviews(req.body);
    const reviews = await newReviews.save();

    res.send({
      message: "Reviews added successfully",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const data = await Reviews.find({});
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getReviewsByEmail = async (req, res) => {
  try {
    const review = await Reviews.findOne({ userEmail: req.params.email });
    res.send(review);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addReviews,
  getAllReviews,
  getReviewsByEmail,
};
