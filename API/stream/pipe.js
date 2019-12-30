//当在可读流上调用stream.pipe()方法时会发出'pipe'事件,并将此可写流添加到其目标集。


//从磁盘读取文件
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //__dirname：获得当前执行文件所在目录的完整目录名
    fs.readFile(__dirname + '/text.txt',(err,data)=>{
        //res.end(data) 在回调中会将文件内容返回给HTTP客户端。
        res.end(data);
    })
})

server.listen(3000);

//使用流编写
const servertwo = http.createServer((req,res)=>{
    const stream = fs.createReadStream(__dirname + '/text.txt');
    //没有等待直到文件被完全读取，而是在准备好要发送的大量数据后立即开始将其流式传输到HTTP客户端。
    stream.pipe(res);
});

servertwo.listen(3001);