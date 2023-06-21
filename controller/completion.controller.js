const Completion = require("../models/completion.model");

const addCompletions = async (req, res) => {
  try {
    const newCompletion = new Completion(req.body);
    const completions = await newCompletion.save();

    res.send({
      message: "Completions added successfully",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCompletions = async (req, res) => {
  try {
    const data = await Completion.find({});
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCompletionsByEmail = async (req, res) => {
  try {
    const completion = await Completion.findOne({
      userEmail: req.params.email,
    });
    res.send(completion);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addCompletions,
  getAllCompletions,
  getCompletionsByEmail,
};
