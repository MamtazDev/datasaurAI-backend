const express = require("express");
const {
  addCompletions,
  getAllCompletions,
  getCompletionsByEmail,
} = require("../controller/completion.controller");

const router = express.Router();

router.post("/add", addCompletions);
router.get("/", getAllCompletions);
router.get("/:email", getCompletionsByEmail);

module.exports = router;
