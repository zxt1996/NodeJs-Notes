//创建Buffer
//Buffer中存储的数据已经确定
//Buffer.from中不支持传入数字，可以通过数组传入
const buf = Buffer.from([1,2,3,4]);
console.log(buf);
