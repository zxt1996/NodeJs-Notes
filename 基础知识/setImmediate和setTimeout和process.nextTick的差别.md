# setImmediate和setTimeout和process.nextTick的差别
```
let racer = function() {
    setImmediate(()=>console.log("immediate1"));
    setTimeout(()=>console.log('timeout'),0);
    setImmediate(()=>console.log("immediate2"));
    process.nextTick(()=>console.log("nextTick"));
    console.log("current event loop")
}

racer()

//current event loop
//nextTick
//timeout
//immediate1
//immediate2
```
- process.nextTick():将在当前正在执行的代码之后但在任何I/O事件或计时器之前执行  

```
let racer1 = function() {
    setTimeout(() => console.log("timeout1"), 0);
    setImmediate(() => console.log("immediate1"));
    process.nextTick(() => console.log("nextTick1"));
  }
  
  let racer2 = function() {
    process.nextTick(() => console.log("nextTick2"));
    setTimeout(() => console.log("timeout2"), 0);
    setImmediate(() => console.log("immediate2"));
  }
  
  let racer3 = function() {
    setImmediate(() => console.log("immediate3"));
    process.nextTick(() => console.log("nextTick3"));
    setTimeout(() => console.log("timeout3"), 0);
  }
  
  racer1()
  racer2()
  racer3()

//nextTick1
//nextTick2
//nextTick3
//timeout1
//timeout2
//timeout3
//immediate1
//immediate2
//immediate3
```
