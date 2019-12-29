const request = require('request');

const options = {
    //HTTP请求的目标URL
    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    //要使用的HTTP方法（GET，POST，DELETE等）
    method:'GET',
    //要在请求中设置的HTTP标头（键值）的对象
    headers:{
        'Accept':'application/json',
        'Accept-Charset':'utf-8'
    }
    //form：包含键值表单数据的对象
};

// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据
request(options,function (err,res,body) {
    if(err){
        return console.log(err);
    }
    let json = JSON.parse(body);
    console.log(res);
    console.log(json);    
})

//POST请求
//post请求有3种方式，由请求头中的content-type决定，属于哪一种post请求
//application/x-www-form-urlencoded： 普通http请求方式，参数是普通的url参数拼接
//application/json： JSON请求方式，参数是json格式
//multipart/form-data: 文件上传

request.post(
    'https://whatever.com/todos',
    {
        json:{
            todo:'Buy the milk'
        }
    },
    (error,res,body)=>{
        if(error){
            console.error(error);
            return
        }
        console.log(`statusCode: ${res.statusCode}`);
        console.log(body)
    }
)