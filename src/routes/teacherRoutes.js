const express = require("express");

const router = express.Router();

const {
  addTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

const { protect } = require("../middleware/authMiddleware");

const { isAdmin } = require("../middleware/roleMiddleware");

const { isTeacherOwner } = require("../middleware/teacherMiddleware");

const upload = require("../middleware/uploadMiddleware");


// ADD TEACHER

router.post(
  "/",
  protect,
  isAdmin,
  upload.single("image"),
  addTeacher
);

// GET ALL TEACHERS

router.get("/", protect, getTeachers);

// UPDATE TEACHER

router.put(
  "/:id",
  protect,
  isTeacherOwner,
  upload.single("image"),
  updateTeacher
);

// DELETE TEACHER

router.delete("/:id", protect, isAdmin, deleteTeacher);

module.exports = router;