const express=require("express")

const app=express();
function middleware(req,res,next){
    req.middleware="middleware1 called";
    next();
}   
function middleware2(req,res,next){
    req.middleware2="data send from middleware";
    next()
}

app.use(middleware)
app.get("/",(req,res)=>{
    res.send(req.middleware)
})
app.get("/post",(req,res)=>{
    res.send(req.middleware)
})
app.get("/comments",middleware2,(req,res)=>{
    console.log(req.middleware2)
    console.log(req.middleware)
    res.send(req.middleware)
})
app.get("/reviews",middleware2,(req,res)=>{
    console.log(req.middleware2)
    console.log(req.middleware)
    res.send("")
})
app.listen(5000,()=>{
    console.log("Server is started on port 5000")
})

