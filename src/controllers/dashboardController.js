const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const User = require("../models/userModel");


exports.getDashboard = async (req, res) => {
  try {

    const totalStudents = await Student.countDocuments();

    const totalTeachers = await Teacher.countDocuments();

    const totalUsers = await User.countDocuments();

    res.status(200).json({
      success: true,
      totalStudents,
      totalTeachers,
      totalUsers,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};