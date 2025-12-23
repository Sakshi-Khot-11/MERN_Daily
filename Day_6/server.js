const express=require('express')
const app=express()
const userRouter=require("./routes/user")



app.use(express.json())

app.use((req,res,next)=>{
 const path=req.url
 console.log(path)
 if(path=='/user/signin' || path=='/user/signup'){
    next()
 }
 else{
    res.send("You need authorization")
 }

})

app.use("/user",userRouter)

app.listen(4000,'localhost',(req,res)=>{
    console.log("server is listening at port 4000")
})