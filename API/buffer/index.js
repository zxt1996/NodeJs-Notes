//Buffer是在内存中开辟的一片区域，用于存放二进制数据。Buffer所开辟的是堆外内存。
//使用Buffer。将字符串转换为Buffer对象，再发给客户端。
const http = require('http');

let hello = '';
for(let i=0;i<10240;i++){
    hello += 'a';
}

//转换为Buffer，通过NodeJS中的Stream流，一点点的返回给客户端。
//如果我们直接返回Buffer类型，就没有了转换操作，直接返回，减少了CPU的重复使用率
console.log(`hello:${hello.length}`);
//创建缓冲区
hello = Buffer.from(hello);
http.createServer((req,res)=>{
    res.writeHead(200);
    res.end(hello);
}).listen(8001);


//访问缓冲区(Unicode代码)
console.log(hello[0]);
//toString()方法打印缓冲区的全部内容
console.log(hello.toString());

//获取缓冲区的长度
console.log(hello.length);

//遍历缓冲区的内容
for(const item of hello){
    console.log(item);
}

//更新缓冲区的内容
const buf = Buffer.alloc(4);
buf.write('HEY');
buf[1] = 111;

//使用copy()复制缓冲区
//默认情况下，您将复制整个缓冲区。
//另外3个参数可让您定义开始位置，结束位置和新的缓冲区长度
const buftwo = Buffer.from('hey!');
let buffcopy = Buffer.alloc(2);
buf.copy(buffcopy,0,0,2);
buffcopy.toString();//'he'