const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

let m = 0;

//监听器会在每次触发命名事件时被调用。
myEmitter.on('eventone',()=>{
    console.log(++m);
});

myEmitter.emit('eventone');
myEmitter.emit('eventone');

//注册最多可调用一次的监听器。
myEmitter.once('eventtwo',()=>{
    console.log(++m);
})

myEmitter.emit('eventtwo');
myEmitter.emit('eventtwo');
