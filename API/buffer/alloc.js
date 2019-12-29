//Buffer存储数据未确定
//当调用 Buffer.allocUnsafe() 和 Buffer.allocUnsafeSlow() 时，被分配的内存段是未初始化的（没有用 0 填充）。
// 虽然这样的设计使得内存的分配非常快，但已分配的内存段可能包含潜在的敏感旧数据。
// 使用通过 Buffer.allocUnsafe() 创建的没有被完全重写内存的 Buffer ，在 Buffer内存可读的情况下，可能泄露它的旧数据。
//创建一个1KB的缓冲区
const buf = Buffer.alloc(1024);
const buftwo = Buffer.allocUnsafe(1024);