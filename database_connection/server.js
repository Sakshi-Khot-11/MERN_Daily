const express=require("express")
const app=express()
const studentRouter=require("./routes/student")
const teacherRouter=require("./routes/teacher")

// middleware
app.use(express.json())
app.use("/student",studentRouter);
app.use("/teacher",teacherRouter)

// URL:http://localhost:4000/student
app.listen(4000,'localhost',(req,res)=>{
    console.log("Server is started at port 4000");
})