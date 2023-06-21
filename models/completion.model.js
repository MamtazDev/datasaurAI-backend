const mongoose = require("mongoose");

const completionsSchema = new mongoose.Schema(
  {
    completions: [
      {
        id: {
          type: Number,
        },
        prompt: {
          type: String,
        },
        completion: [
          {
            id: {
              type: Number,
            },
            text: {
              type: String,
            },
          },
        ],
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

const Completion = mongoose.model("Completion", completionsSchema);

module.exports = Completion;
