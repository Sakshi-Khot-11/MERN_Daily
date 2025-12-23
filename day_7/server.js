const express=require('express')
const app=express()
const userRouter=require("./routes/user")
const authUser=require("./utils/auth")



app.use(express.json())

app.use(authUser)

app.use("/user",userRouter)

app.listen(4000,'localhost',(req,res)=>{
    console.log("server is listening at port 4000")
})