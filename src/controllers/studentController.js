const Student = require("../models/studentModel");

// ADD Student 

exports.addStudent = async (req, res) => {
    try {
        const { name, className, age, parentName } = req.body;

        const image = req.file ? req.file.path : "";

        const student = await Student.create({
            name,
            className,
            age,
            parentName,
            image,
            userId: req.user.id,

        });

        res.status(201).json({
            success: true,
            message: "Registered Successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

exports.getStudents = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 5;

        const search = req.query.search || "";

        const query = {

            name: {
                $regex: search,
                $options: "i",
            },
        };

        const students = await Student.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .populate("userId", "name  email role");

        const total = await Student.countDocuments(query);

        res.status(200).json({
            success: true,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            students,
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


// GET SINGLE STUDENT 


exports.getSingleStudent = async (req, res) => {
    try {
        const student = await Student.findById(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        res.status(200).json({
            success: true,
            student,
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

// UPDATE STUDENT

exports.updateStudent = async (req, res) => {
    try {
        const { name, className, age, parentName } =
            req.body;

        let student = await Student.findById(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        student.name = name || student.name;
        student.className =
            className || student.className;
        student.age = age || student.age;
        student.parentName =
            parentName || student.parentName;

        if (req.file) {
            student.image = req.file.path;
        }

        await student.save();

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student,
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,

        });
    }
};


// DELETE STUDENT

exports.deleteStudent = async (req, res) => {
    try {

        const student = await Student.findById(
            req.params.id

        );

        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student not found",
            });

        }

        await student.deleteOne();

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,

        });
    }
};