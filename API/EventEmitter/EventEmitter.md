# EventEmitter事件触发器
> 所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上。  

> 当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被**同步地调用**。 被调用的监听器返回的任何值都将会被忽略并丢弃。  

- emit():事件发射器中的此方法将在模块中发射事件
- on():用于侦听node.js中已注册事件的数据
- once():注册最多可调用一次的监听器。  

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('event',()=>{
    console.log('触发事件');
})

myEmitter.emit('event');
```