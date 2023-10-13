const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const checkRole = require("../middleware/role-auth");
const {
  createUser,
  loginUser,
  getUser,
  deleteUser,
  logoutUser,
} = require("../controllers/user-controller");
const loginLimiter = require("../middleware/rate-limit");

// Route for create user
router.post("/signup", createUser);

// Route for login user
router.post("/login", loginLimiter, loginUser);

// Route for logout user
router.post("/logout", logoutUser);

// Route for get all user
router.get("/", checkAuth, checkRole(["admin"]), getUser);

// Route for delete user
router.delete("/:id", checkAuth, checkRole(["admin"]), deleteUser);

// Export
module.exports = router;
