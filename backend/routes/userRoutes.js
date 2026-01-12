const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const app = express();
const { login, signup, verifyEmail } = require("../controllers/userController");

app.use(cookieParser());

// User routes
router.post('/login', login);
router.post('/signup', signup);
router.get("/:id/verify/:token", verifyEmail);

module.exports = router;
