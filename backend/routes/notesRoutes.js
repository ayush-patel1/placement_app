const express = require('express');
const router = express.Router();
const { storeNotes, getNotes } = require("../controllers/notesController");

// Notes routes
router.post('/storeNotes', storeNotes);
router.post('/getNotes', getNotes);

module.exports = router;
