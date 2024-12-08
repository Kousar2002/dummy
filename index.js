var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.send("hi this root api");
})
app.get("/products",(req,res)=>{
    res.send("this is products api");
})
port=3678;
app.listen(port,()=>{
    console.log("server started "+" http://localhost:"+port);
})