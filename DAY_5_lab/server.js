const express=require('express')
const app=express()
//URL: http://localhost:4000/demo
app.get("/demo",(req,res)=>{
    res.send("hello from express server")
});

app.listen(4000,()=>{
    console.log("server is runnign on port 4000");
});
