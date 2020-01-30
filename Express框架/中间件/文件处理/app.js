const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require("morgan");

const app = express();

//中间件函数处理结束后，必须执行以下两步
//1.所有处理结束，发送res.end或res.sendFile等函数结束响应
//2.调用next函数执行下一个中间件函数

//日志记录
// app.use((req,res,next)=>{
//     console.log("request IP: " + req.url);
//     console.log("Request date: " + new Date());
//     next();
// });
app.use(morgan("short"));

//静态文件服务中间件
// app.use((req,res,next)=>{
//     const filePath = path.join(__dirname,"static",req.url);
//     fs.exists(filePath,(exists)=>{
//         if(exists){
//             res.sendFile(filePath);
//         }else{
//             next();
//         }
//     })
// })
//设置静态文件的路径
const staticPath = path.join(__dirname,"static");
//使用express.static从静态路径提供服务
app.use(express.static(staticPath));

//404处理
app.use((req,res)=>{
    res.status(404);
    res.send("File not found");
})

app.listen(3000,(req,res)=>{
    console.log("app started on port 3000");
})
