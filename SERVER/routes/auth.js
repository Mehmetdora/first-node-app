const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth");

const { login, logout } = require("../controllers/AuthController");

router.post("/logined", login);
router.post("/logout", authMiddleware, logout);

module.exports = router;
