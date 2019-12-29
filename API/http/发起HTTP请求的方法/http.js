const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(resp)=>{
    let data = '';

    resp.on('data',(chunk)=>{
        data += chunk;
    });

    resp.on('end',()=>{
        console.log(JSON.parse(data).explanation);
    })
}).on('error',(err)=>{
    console.log("Error:"+err.message)
});


//执行GET请求
const options = {
    //该属性会被url.parse()解析，优先级高于host
    hostname:'whatever.com',
    //远程服务器的端口，默认是80
    port:443,
    //指定HTTP请求的路径，默认为根路径（/）
    path:'/todos',
    method:'GET'
}

const req = https.request(options,res => {
    console.log(`statusCode:${res.statusCode}`);

    res.on('data',d => {
        //process.stdout属性返回一个对象，表示标准输出。
        //该对象的write方法等同于console.log，可用在标准输出向用户显示内容。
        process.stdout.write(d);
    })
})

req.on('error',err=>{
    console.log(err);
})
//req.end()必须被调用，即使没有在请求体内写入任何数据，也必须调用。
//因为这表示已经完成HTTP请求
req.end();

//执行POST请求
const mydata = JSON.stringify({
    todo:'Buy the milk'
})

const postoptions = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    //一个对象，包含了HTTP请求的头信息。
    headers:{
        'Content-Type':'application/json',
        'Content-Length':mydata.length
    }
}

const postreq = https.request(postoptions,res=>{
    console.log(`statusCode:${res.statusCode}`);

    res.on('data',d=>{
        process.stdout.write(d);
    })
})

postreq.on('error',err=>{
    console.log(err);
})

postreq.write(mydata);
req.end()
