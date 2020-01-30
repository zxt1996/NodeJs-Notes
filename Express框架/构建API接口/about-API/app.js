//API服务
//通过中间件和内置函数解析网络请求
//将JSON数据和HTTP状态码封装到响应对象并返回客户端

const express = require('express');
const apiVersion1 = require("./api1");
const apiVersion2 = require("./api2");
const app = express();

//构建API的基本流程
//1.解析请求
//2.设置HTTP状态码
//3.返回响应数据
// app.get("/random/:min/:max",(req,res)=>{
//     const min = parseInt(req.params.min);
//     const max = parseInt(req.params.max);
//     if(isNaN(min) || isNaN(max)){
//         res.status(400);
//         res.json({
//             error:"bad request."
//         });
//         return;
//     }

//     const result = Math.round((Math.random()*(max - min)) + min);
//     res.json({
//         result:result
//     });
// })

//使用Router中间件实现API版本管理
app.use("/v1",apiVersion1);
app.use("/v2",apiVersion2);

app.listen(3000,()=>{
    console.log("app started on port 3000");
})