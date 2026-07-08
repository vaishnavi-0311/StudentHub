const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        parentName: {        // 👈 ADD THIS
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Student", studentSchema);