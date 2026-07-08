exports. isAdmin = (req,res,next)=>{

    try {

        if(req.user.role !== "admin"){

            return res.status(403).json({
                success:false,
                message:"Access Denied. Only Admin can be access"

            });
        }

        next();

    } catch (error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

exports.isAdminOrTeacher = (req,res,next)=>{

   if(
      req.user.role !== "admin" &&
      req.user.role !== "teacher"
   ){

      return res.status(403).json({
         success:false,
         message:"Admin or Teacher only",
      });

   }

   next();

};