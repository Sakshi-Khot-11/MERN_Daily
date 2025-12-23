const express=require('express')
const router=express.Router()
const pool=require('../db/pool')
const result=require("../utils/result")
const cryptojs=require('crypto-js')
const jwt=require('jsonwebtoken')
const config=require('../utils/config')


router.post('/signup',(req,res)=>{
    const {name,email,password,mobile}=req.body;
    const sql=`insert into users (name,email,password,mobile) values (?,?,?,?)`
    const hashpwd=cryptojs.SHA256(password).toString()
    pool.query(sql,[name,email,hashpwd,mobile],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body;
    const hashpwd=cryptojs.SHA256(password).toString()

    const sql=`select * from users where email=? and password=?`
    pool.query(sql,[email,hashpwd],(err,data)=>{
        if(err){
            res.send(result.createResult(err))
        }
       else if(data.length==0){
            res.send("Invalid email or password")
        }
        else{
            const user=data[0]
            const payload={
                uid:user.uid,
                email:user.email
            }

            const token=jwt.sign(payload,config.secret)
            const userData={
                name:user.name,
                mobile:user.mobile,
                token
            }
            res.send(result.createResult(null,userData))
        }
    })

   
})

// query parameter

router.get("/",(req,res)=>{
    const email=req.headers.email;
    const sql=`select *from users where email=?`
    pool.query(sql,[email],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})

// request parameter

router.delete("/",(req,res)=>{
    const uid=req.headers.uid
    const sql=`delete from users where uid=?`
    pool.query(sql,[uid],(err,data)=>{
        res.send(result.createResult(err,data))
    })
})


module.exports=router;