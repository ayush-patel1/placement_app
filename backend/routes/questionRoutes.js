const express = require("express");
const router = express.Router();
const { getAllQuestions, addQuestions } = require("../controllers/questionController");

// Question routes
router.post("/getAllQuestions", getAllQuestions);
router.post("/addQuestions", addQuestions);

module.exports = router;
