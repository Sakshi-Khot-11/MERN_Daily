const express=require('express')
const app=express()
const port=4000
//URL:http://localhost:4000/test
app.get("/test",(req,res)=>{
res.send("Hello from m express  server by sakshi")
});
 
app.get("/fruits",(req,res)=>{
    const fruits=[{
        name:"apple",color:"red",
        name:"mango",color:"grren",
        name:"banana",color:"yellow",
    }]
res.send({
    msg:"data sent successful",
   fruitarray:fruits,
});
})

app.post("/login",(req,res)=>{
res.send("POST method calling")
});
 
app.put("/update",(req,res)=>{
res.send("PUT method calling")
});

app.delete("/del",(req,res)=>{
res.send("DELETE method calling")
});


app.listen(port,()=>{
console.log("Serevr is running at port 4000")
});