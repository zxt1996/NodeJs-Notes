# http模块
- 作为服务器端使用，创建一个http服务器，监听http客户端请求并返回响应；
- 作为客户端使用，发起一个http客户端请求，获取服务器端响应。
# node http模块创建服务器
```
var http = require('http');

http.createServer( (request, response) => {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

```
首先需要**使用.createServer方法**创建一个服务器，然后**调用.listen方法**监听端口。之后，每当来了一个客户端请求，创建服务器时传入的回调函数就被调用一次。可以看出，这是一种事件机制。

**HTTP请求**、**HTTP响应**本质上都是一个数据流，由请求头（headers）和请求体（body）组成。
## HTTP请求
HTTP请求在发送给服务器时，可以认为是按照从头到尾的顺序一个字节一个字节地以数据流方式发送的。而http模块创建的HTTP服务器在接收到完整的请求头后，就会调用回调函数。在回调函数中，除了可以使用request对象访问请求头数据外，还能把request对象当作一个只读数据流来访问请求体数据。
```
http.createServer( (request, response) => {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(8888);
```
## HTTP响应
在回调函数中，除了可以使用response对象来写入响应头数据外，还能把response对象当作一个只写数据流来写入响应体数据。例如在以下例子中，服务端原样将客户端请求的请求体数据返回给客户端。
```
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    request.on('data', function (chunk) {
        response.write(chunk);
    });

    request.on('end', function () {
        response.end();
    });
}).listen(8888);
```
# 客户端模式
为了发起一个客户端HTTP请求，我们需要指定目标服务器的位置并发送请求头和请求体.
```
var options = {
        hostname: 'www.example.com',
        port: 8888,
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();

```