const express = require("express");

const router = express.Router();

const {
    addStudent,
    getStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent
} = require ("../controllers/studentController");


const { protect,} = require("../middleware/authMiddleware");

const { isStudentOwner } = require("../middleware/studentMiddleware");

const {isAdminOrTeacher, isAdmin} = require("../middleware/roleMiddleware");

const upload = require("../middleware/uploadMiddleware");


// ADD STUDENT 


router.post("/", protect, isAdminOrTeacher, upload.single("image"), addStudent);


// GET STUDENTS

router.get("/",protect, getStudents);

// GET SINGLE STUDENT

router.get("/:id", protect, getSingleStudent);

// UPDATE STUDENTS

router.put("/:id",protect, isStudentOwner, upload.single("image"), updateStudent);

// DELETE STUDENt

router.delete("/:id", protect, isAdmin, deleteStudent);

module.exports = router;