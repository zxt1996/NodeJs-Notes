const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const app = express();

//中间件函数的执行从上到下

//不做任何修改的中间件
//日志记录中间件
app.use((req,res,next)=>{
    console.log("from: " + req.method + " to " + req.url);
    next();
})

//修改request、response的中间件
// app.use((req,res,next)=>{
//     let minute = (new Date()).getSeconds();
//     if((minute % 2)==0){
//         next();
//     }else{
//         res.statusCode = 403;
//         res.end('not authorized');
//     }
// })

//第三方中间件类库
//Morgan:日志记录中间件
app.use(logger("my logger"));

//静态文件中间件
//利用内置的express.static模块
//任何在 public 目录下的静态文件都能直接请求
//path.resolve 就是用来解决多平台目录路径问题
const publicPath = path.resolve(__dirname,"public");
app.use(express.static(publicPath));

app.use((req,res)=>{
    res.end('secret');
})

http.createServer(app).listen(3000);