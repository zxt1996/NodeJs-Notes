const fs = require('fs');

//stat方法的参数是一个文件或目录，它产生一个对象，该对象包含了该文件或目录的具体信息。
//我们往往通过该方法，判断正在处理的到底是一个文件，还是一个目录。
//2个参数：错误消息和文件统计信息
fs.stat('./text.txt',(err,stats)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(stats);

    //判断文件是目录或文件
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    //文件是否符号链接
    console.log(stats.isSymbolicLink());
    //文件大小（以字节为单位）
    console.log(stats.size);
})