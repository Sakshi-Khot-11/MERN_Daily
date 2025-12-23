const express=require('express')

const route=express.Router();

route.get("/",(req,res)=>{
    res.send("In get user")
})

route.post("/",(req,res)=>{
    res.send("In POST user")
})
route.put("/",(req,res)=>{
    res.send("In PUT user")
})
route.delete("/",(req,res)=>{
    res.send("In delete user")
})
module.exports=route