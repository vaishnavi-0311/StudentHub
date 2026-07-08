const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    subject: {
        type:String,
        required: true,
    },
    experience :{
        type: Number,
        required: true,
    },
    image: {
        type:String
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
    
},
{
    timestamps:true,
});

module.exports = mongoose.model("Teacher", teacherSchema);