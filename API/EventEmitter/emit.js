const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('eventone',function (a,b) {
    //this 关键词会被指向监听器所绑定的 EventEmitter 实例。
    console.log(a,b,this,this===myEmitter);  
})

myEmitter.on('eventtwo',(a,b)=>{
    //箭头函数作为监听器时this 关键词不会指向 EventEmitter 实例：
    console.log(a,b,this);
})

myEmitter.on('eventthree',(a)=>{
    console.log(a);
    setImmediate(()=>{
        console.log('异步的使用');
    });
});

//将参数和 this 传给监听器
//eventEmitter.emit() 方法可以传任意数量的参数到监听器函数。
myEmitter.emit('eventthree','jojo')
myEmitter.emit('eventone','a','b');
myEmitter.emit('eventtwo','a','b');

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event',function firstListener() {
    console.log('第一个监听器');
})

myEmitter.on('event',function secondListener(arg1,arg2) {
    console.log('第二个监听器：'+`${arg1}`+`${arg2}`)
})

myEmitter.on('event',function thirdListener(...args) {
    const parameters = args.join('');
    console.log('第三个监听器：'+`${parameters}`);
})

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// [
//     [Function: firstListener],
//     [Function: secondListener],
//     [Function: thirdListener]
//   ]
//   第一个监听器
//   第二个监听器：12
//   第三个监听器：12345