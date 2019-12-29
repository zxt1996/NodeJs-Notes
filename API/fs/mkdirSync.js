const fs = require('fs');

//使用fs.mkdir()或fs.mkdirSync()创建一个新文件夹。
//mkdir接受三个参数，第一个是目录名，第二个是权限值，第三个是回调函数。
const folderName = './test';
try{
    if(!fs.existsSync(folderName)){
        fs.mkdirSync(folderName);
    }
}catch(err){
    console.error(err);
}