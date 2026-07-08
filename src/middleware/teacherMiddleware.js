const Teacher = require("../models/teacherModel");

exports.isTeacherOwner = async(req,res,next)=>{

   try {

      const teacher = await Teacher.findById(req.params.id);

      if(!teacher){

         return res.status(404).json({
            success:false,
            message:"Teacher not found",
         });

      }

      // admin can edit anyone

      if(req.user.role === "admin"){
         return next();
      }

      // teacher can edit own profile only

      if(!teacher.userId || teacher.userId.toString() !== req.user.id){

         return res.status(403).json({
            success:false,
            message:"You can edit only your profile",
         });

      }

      next();

   } catch(err){

      res.status(500).json({
         success:false,
         message:err.message,
      });

   }

}