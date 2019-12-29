const fs = require('fs');

//参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符
fs.open('./text.txt','r',(err,fd)=>{
    console.log("读取成功",fd);
})

// r+ 打开文件进行读写
// w+打开文件以进行读写，将流放在文件的开头。如果不存在则创建文件
// a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件
// a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

//使用fs.openSync方法打开文件，该方法不会在回调中提供文件描述符对象，而是会返回该文件
try{
    const fd = fs.openSync('./text.txt','r');
    console.log("用openSync打开文件"+fd);
}catch(err){
    console.error(err);
}