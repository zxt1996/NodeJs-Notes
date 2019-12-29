const http = require('http');

//使用createServer()方法创造一个服务器实例
//req参数是一个对象，表示客户端的HTTP请求
//res参数也是一个对象，表示服务端的HTTP回应
http.createServer(function (req,res) {
    //给客户端写一个响应
    res.write('<h1>Hello, World!</h1>');
    //将statusCode属性设置为200，以指示响应成功
    res.statusCode = 200;
    //设置了Content-Type标头
    res.setHeader = ('Content-Type','text/html');
    res.end();    
}).listen(8080);//服务器对象监听端口8080

