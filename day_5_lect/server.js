const express=require('express')
const app=express()
const route=require("./router/user")


// middleware

app.use("/user",route)


//URL:http://localhost:4000/user
app.listen(4000,'localhost',()=>{
    console.log("server is listening at port 4000");
})