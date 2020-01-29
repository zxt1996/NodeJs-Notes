const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//设置引擎
app.set("views",path.resolve(__dirname,'views'));
app.set('view engine','ejs');

//引入静态文件
app.use('/static', express.static(__dirname + '/public'));

//设置留言的全局变量
const entries = [];
app.locals.entries = entries;

//使用Morgan进行日志记录
app.use(logger("dev"));

//设置用户表单提交动作信息的中间件，所有信息会保存在req.body里
//bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，
//也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//当访问了网站根目录，渲染主页(view/index.ejs)
app.get('/',(req,res)=>{
    res.render("index");
})

app.post('/',(req,res)=>{
    console.log(req.body)
})

//渲染新留言页面
app.get('/new-entry',(req,res)=>{
    res.render("new-entry");
})

//post动作进行留言新建的路由处理
app.post('/new-entry',(req,res)=>{
    //如果提交的表单没有标题和内容，返回404
    if(!req.body.title || !req.body.body){
        res.status(400).send("entries must have a title and a body");
        return;
    }

    //添加新留言到entries中
    entries.push({
        title:req.body.title,
        content:req.body.body,
        published:new Date()
    });

    //重定向到主页
    res.redirect("/");
})

//渲染404页面
app.use((req,res)=>{
    res.status(404).render("404");
})

//在3000端口启动服务器
http.createServer(app).listen(3000,()=>{
    console.log("app start on port 3000");
})