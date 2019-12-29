const fs = require('fs');

const content = 'Some content';
//writeFile方法用于异步写入文件。
fs.writeFile('./text.txt',content,err=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("输入成功")
})

//writeFileSync方法用于同步写入文件。
try{
    const data = fs.writeFileSync('./text.txt',content);
    console.log("同步输入成功");
}catch(err){
    console.error(err);
}

//此API将替换文件的内容（如果已经存在）
//可以通过指定标志来修改默认值：
fs.writeFile('./text.txt',content,{flag:'a+'},err=>{

})

// r+ 打开文件进行读写
// w+打开文件以进行读写，将流放在文件的开头。如果不存在则创建文件
// a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件
// a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

//将内容附加到文件末尾
//fs.appendFile()及其fs.appendFileSync()
const contenttwo = '将内容添加到文件末尾';
fs.appendFile('./text.txt',contenttwo,err=>{
    if(err){
        console.error(err);
        return;
    }
})