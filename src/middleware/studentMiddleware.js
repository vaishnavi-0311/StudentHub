const Student = require("../models/studentModel");

exports.isStudentOwner = async(req,res,next)=>{

   try {

      const student = await Student.findById(req.params.id);

      if(!student){

         return res.status(404).json({
            success:false,
            message:"Student not found",
         });

      }

      // admin can edit anyone

      if(req.user.role === "admin"){
         return next();
      }

      // student can edit own profile only

     if(!student.userId || student.userId.toString() !== req.user.id){
        
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