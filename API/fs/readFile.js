const fs = require('fs');

//readFile方法用于异步读取数据
//readFile方法的第一个参数是文件名，第二个参数是文件编码，第三个参数是回调函数
//如果没有指定文件编码，返回的是原始的缓存二进制数据，
//这时需要调用buffer对象的toString方法，将其转为字符串。
fs.readFile('./text.txt',(err,data)=>{
    if(err){
        console.error(err);
        return ;
    }
    console.log(data);
})

//readFileSync方法用于同步读取文件，返回一个字符串。
try{
    const data = fs.readFileSync('./text.txt','utf8');
    console.log(data);
}catch(err){
    console.error(err);
}