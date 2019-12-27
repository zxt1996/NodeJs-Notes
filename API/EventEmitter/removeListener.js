const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//一旦事件被触发，所有绑定到该事件的监听器都会按顺序依次调用。 
//这意味着，在事件触发之后、且最后一个监听器执行完成之前，
// removeListener() 或 removeAllListeners() 不会从 emit() 中移除它们。
const callbackA = () => {
    console.log('A');
    myEmitter.removeListener('event',callbackB);
}

const callbackB = () => {
    console.log('B');
}

myEmitter.on('event',callbackA);
myEmitter.on('event',callbackB);

// callbackA 移除了监听器 callbackB，但它依然会被调用。
// 触发时内部的监听器数组为 [callbackA, callbackB]

myEmitter.emit('event');
// 打印:
//   A
//   B

// callbackB 现已被移除。
// 内部的监听器数组为 [callbackA]
myEmitter.emit('event');
// 打印:
//   A