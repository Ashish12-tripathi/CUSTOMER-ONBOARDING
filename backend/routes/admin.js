// backend/routes/admin.js
const express = require("express");
const router = express.Router();
const pool = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/users", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email, gstin FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
