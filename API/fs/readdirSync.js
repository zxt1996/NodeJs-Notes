const fs = require('fs');
const path = require('path');

const folderPath = './node_modules';
//使用fs.readdir()或fs.readdirSync()读取目录的内容。
//返回一个所包含的文件和子目录的数组。
let data = fs.readdirSync(folderPath);
console.log(data);

// 获取完整路径
fs.readdirSync(folderPath).map(fileName => {
    console.log(path.join(folderPath,fileName));
})

//过滤结果以仅返回文件，并排除文件夹

