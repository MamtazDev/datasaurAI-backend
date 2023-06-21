const User = require("../models/user.model");
const bcrcypt = require("bcryptjs");
const randomstring = require("randomstring");

const registerUser = async (req, res) => {
  try {
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      return res.status(403).send({
        message: `${req.body.email} is already Exist!`,
        status: 403,
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrcypt.hashSync(req.body.password),
      });
      const user = await newUser.save();

      res.status(200).send({
        message: "User Created Successfully!",
        status: 200,
        user,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrcypt.compareSync(req.body.password, user.password)) {
      return res.send({
        message: "Logged in successfully",
        status: 200,
        user,
      });
    } else {
      res.status(401).send({
        message: "Invalid user or password",
        status: 401,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
