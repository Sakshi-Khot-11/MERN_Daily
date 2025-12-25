const jwt=require("jsonwebtoken")
const result=require("./result")
const config=require("./config")




function authUser(req,res,next){
    const path=req.url
 console.log(path)
 if(path=='/user/signin' || path=='/user/signup'){
    next()
 }
 else{
   const token=req.headers.token
   if(!token){
      res.send(result.createResult("Token is missing"))
   }
   else{
      try{

     
      const payload=jwt.verify(token,config.secret)
      req.headers.uid=payload.uid
      req.headers.email=payload.email
      next()}
      catch(ex){
         res.send(result.createResult("Token is Invalid"))
      }
      
   }
  
 }
}
module.exports=authUser