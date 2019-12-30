const Stream = require('stream');
const fs = require('fs');
const assert = require('assert');
//创建可读流
const readableStream = new Stream.Readable();

//异步迭代器
async function logChunks(readable) {
    for await(const chunk of readable){
        console.log(chunk);
    }
}

const readable = fs.createReadStream('./text.txt',{encoding:'utf8'});

logChunks(readable);

//用字符串收集可读流
const {Readable} = require('stream');
async function readableToString(readable) {
    let result = '';
    for await (const chunk of readable){
        result += chunk;
    }
    return result;
}
//stream.Readable.from(iterable, [options])
//这是一种用于从迭代器中创建Readable Streams的实用方法，
//该迭代器保存inerable中包含的数据。
const readabletwo = Readable.from('good morning',{encoding:'utf8'});
readableToString(readabletwo).then((data)=>{
    console.log(data);
})

async function * generation() {
    yield 'hello';
    yield 'streams';
}
//Readable.from（）：从可迭代对象创建可读流
const readablethree = Readable.from(generation());

readablethree.on('data',(chunk)=>{
    console.log(chunk);
})

//两种阅读模式
//在流动模式下，会通过EventEmitter接口使用事件从底层系统自动读取数据，并尽快将其提供给应用程序。
//在暂停模式下，必须显式调用stream.read()方法以从流中读取数据块。
let datastream = '';
//Create a readable stream
let readerStream = fs.createReadStream('./text.txt');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

//函数调用fs.createReadStream()为您提供了可读的流。
//最初，流处于静态状态。一旦您侦听数据事件并附加了回调，它就会开始流动。
readerStream.on('data',(chunk)=>{
    datastream += chunk;
})

readerStream.on('end',()=>{
    console.log(datastream);
})
readerStream.on('error',(err)=>{
    console.log(err.stack);
})

console.log("Program ended");

//在暂停模式下，您仅需要在流实例上重复调用read（），直到读取完所有数据块为止
let datapause = '';
let chunks;

readerStream.on('readable',()=>{
    //read（）函数从内部缓冲区读取一些数据并将其返回。
    //当没有内容可读取时，它返回null。
    while((chunks=readerStream.read())!=null){
        datapause += chunks;
    }
});

readerStream.on('end',()=>{
    console.log(datapause);
})
