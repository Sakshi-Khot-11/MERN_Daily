const express=require('express')

const router=express.Router()

const pool=require('../db/pool')
const result=require('../utills/result')

router.get("/",(req,res)=>{
    const sql=`select * from teacher`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })})

router.post("/",(req,res)=>{
    
    const sql=`insert into teacher (t_id,name,email) values (?,?,?)`
    const {t_id,name,email}=req.body
    pool.query(sql,[t_id,name,email],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

router.put("/",(req,res)=>{
    const sql=`update teacher set name="vihanshi" where t_id=11`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

router.delete("/",(req,res)=>{
    const sql=`delete from teacher where t_id=14`
    pool.query(sql,(err,data)=>{
        res.send(result.createResult(err,data))
    })
    
})

module.exports=router
