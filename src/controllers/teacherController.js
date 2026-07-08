const Teacher = require("../models/teacherModel");

// ADD TEACHER

exports.addTeacher = async (req, res) => {
    try {
        const { name, subject, experience } = req.body;

        const teacher = await Teacher.create({
            name,
            subject,
            experience,
            image: req.file ? req.file.path : "",
            userId: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Teacher added Successfully",
            teacher
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}


// GET ALL TEACHERS 

exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();

        res.status(200).json({
            success: true,
            teachers,
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// UPDATE TEACHERS

exports.updateTeacher = async (req, res) => {

    try {
        const { name, subject, experience } = req.body;

        let teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found"
            })
        }

        teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            {
                name ,
                subject,
                experience,
                image: req.file ? req.file.path : teacher.image,

            },
            {
                new: true,

            }

        )
        res.status(200).json({
            success: true,
            message: "Teacher updated successfully",
            teacher
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// DELETE TEACHER

exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            });
        }

        await teacher.deleteOne();

        res.status(200).json({
            success: true,
            message: "Teacher deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};