const express=require("express")
const router=express.Router();
const result=require('../utills/result')
const pool=require("../db/pool")


router.get("/",(req,res)=>{
    const sql=`select * from student`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
});

router.post("/",(req,res)=>{
    const {roll,name,course}=req.body;
    const sql=`insert into student(roll,name,course) values(?,?,?)`
    pool.query(sql,[roll,name,course],(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
})

router.put("/",(req,res)=>{
    const sql=`update student set name="sakshu" where roll=1`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
})

router.delete("/",(req,res)=>{

    const sql=`delete from student where roll=3`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
})

module.exports=router;