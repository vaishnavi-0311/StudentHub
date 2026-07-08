const express = require("express");

const router = express.Router();

const { getDashboard } = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");

const { isAdmin } = require("../middleware/roleMiddleware");

router.get("/", protect, isAdmin, getDashboard);



module.exports = router;