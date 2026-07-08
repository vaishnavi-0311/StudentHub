const express = require ("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const dotenv = require("dotenv");

const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

// static folder

app.use("/uploads", express.static("uploads"));
app.use(
  express.static(
    path.join(__dirname, "../Frontend")
  )
);

// Routes connection 

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students",studentRoutes);


const teacherRoutes = require("./routes/teacherRoutes");

app.use("/api/teachers", teacherRoutes);


const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);



// GET API TEST 

app.get("/",(req,res)=>{
    res.send("API running");
});


const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
})