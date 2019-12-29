const path = require('path');

const notes = '/users/joe/notes.txt';

//dirname：获取文件的父文件夹
console.log(path.dirname(notes));
//basename：获取文件名部分
console.log(path.basename(notes));
//extname：获取文件扩展名
console.log(path.extname(notes));
//通过指定第二个参数来获取不带扩展名的文件名basename
console.log(path.basename(notes,path.extname(notes)));

//连接路径的两个或多个部分path.join()
const name = 'joe';
console.log(path.join('/','user',name,'notes.txt'));

//获得相对路径的绝对路径计算
console.log(path.resolve('joe.txt'));//'/Users/joe/joe.txt'
//如果指定第二个参数文件夹，resolve则将第一个作为第二个的基础：
console.log(path.resolve('tmp','joe.txt'));//'/Users/joe/tmp/joe.txt'
//如果第一个参数以斜杠开头，则表示它是绝对路径：
console.log(path.resolve('/etc','joe.txt'));//'/etc/joe.txt'
