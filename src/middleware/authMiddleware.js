const jwt = require("jsonwebtoken");


exports.protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token found"
            });
        }

        // Remove bearer 
        token = token.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ fixed

        req.user = decoded;

        next();

    }
    
    catch(err){
        res.status(401).json({
            success: false,
            message: "Invalid token"
        })
    }
}