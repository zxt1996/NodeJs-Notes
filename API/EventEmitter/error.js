const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('error',(err)=>{
    console.log('错误信息');
})

//当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、并退出 Node.js 进程。
myEmitter.emit('error',new Error('错误'));
