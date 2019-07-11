# Buffer
Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。
```
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```
## 1.Buffer.from()
Buffer中存储的数据已确定  
Buffer.from(obj) // obj支持的类型string, buffer, arrayBuffer, array, or array-like object  
- Buffer.from(array)返回一个新建的包含所提供的字节数组的副本的Buffer。
```
let buf1 = Buffer.from([1,2,3,4]) // <Buffer 01 02 03 04>
let buf2 = Buffer.from([[0x62, 0x75, 0x66, 0x66, 0x65, 0x72]]) // <Buffer 62 75 66 66 65 72>
buf2.toString() // 'buffer'
```
- Buffer.from(arrayBuffer[,byteOffset[,length]])返回一个新建的与给定的ArrayBuffer共享同一内存的Buffer。
```
const arr = new Unit16Array(2)

const buf = Buffer.from(arr.buffer) // 改动arr也会影响到buf
```
注意：Buffer.from不支持传入数字，如下所示：
```
Buffer.from(1234);

buffer.js:208
    throw new errors.TypeError(
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "value" argument must not be of type number. Received type number
    at Function.from (buffer.js:208:11)
    ...
    

```
若要传入数字可以采用传入数组的方式：
```
const buf = Buffer.from([1, 2, 3, 4]);
console.log(buf); //  <Buffer 01 02 03 04>

```
## 2.Buffer.alloc()
Buffer.alloc会用0值填充已分配的内存  
Buffer.alloc(size[,fill[,encoding]])返回一个指定大小的被填满的Buffer实例。这个方法会明显地比Buffer.allocUnsafe(size)慢，但可确保新创建的Buffer实例绝不会包含旧的和潜在的敏感数据。
```
// size: 新建的Buffer期望的长度
// fill：<string | Buffer | integer>用来预填充新建的Buffer的值，默认：0
// encoding：如果fill是字符串，那么这个就是字符编码，默认：utf-8

const buf = Buffer.alloc(5) // <Buffer 00 00 00 00 00>
const buf = Buffer.alloc(5, 'a') // <Buffer 61 61 61 61 61>
const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64') // 输出: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64> hello world
```
## 3.Buffer.allocUnsafe() 
Buffer.allocUnsafe(size)与Buffer.allocUnsafeSlow(size)返回一个新建的指定size的Buffer，但它的内容必须被初始化，可以使用buf.fill(0)或完全写满。  
使用通过Buffer.allocUnsafe()创建的没有被完全重写内存的Buffer，在Buffer内存可读的情况下，有可能泄露它的旧数据。
## Buffer使用
buffer转字符串
```
const buf = Buffer.from('test');
console.log(buf.toString('utf8'));                 // test
console.log(buf.toString('utf8', 0, 2));           // te

```
buffer转json
```
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
console.log(buf.toJSON());    // { type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] }

```