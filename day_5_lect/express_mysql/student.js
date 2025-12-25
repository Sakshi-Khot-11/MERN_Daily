const express=require('express')
const router=express.Router();
const pool=require("./db/pool")
const result=require("./utils/result")



router.get("/",(req,res)=>{
    const sql=`SELECT * FROM students`
    pool.query(sql,(error,data)=>{
        res.send(result.createResult(error,data))
    })
    
});

router.post("/",(req,res)=>{
    const {reg_no,name,email,course_id}=req.body
    const sql=`insert into students (reg_no,name,course_id) values (?,?,?)`
    pool.query(sql,[reg_no,name,course_id],(err,data)=>{
       res.send(result.createResult(err,data))
    })
   
});

router.put("/",(req,res)=>{
    const sql=`update students set name="sakshu" where reg_no=11`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    // res.send("In students put")
});

router.delete("/",(req,res)=>{
    const sql=`delete from students where reg_no=13`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    // res.send("IN student delete")
})


module.exports=router