const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    reviews: [
      {
        id: {
          type: Number,
        },
        prompt: {
          type: String,
          required: true,
        },
        completion: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        reviews: {
          type: String,
          required: true,
        },
      },
    ],
    userId: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
