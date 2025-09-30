// backend/models/userModel.js
const pool = require("../db");

// Create user
const createUser = async (name, email, gstin, passwordHash) => {
  const result = await pool.query(
    "INSERT INTO users (name, email, gstin, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, gstin, passwordHash]
  );
  return result.rows[0];
};

// Find user by email
const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};
