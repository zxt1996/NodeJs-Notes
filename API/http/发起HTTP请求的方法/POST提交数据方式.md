# application/x-www-form-urlencoded
浏览器的原生 \<form> 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。

```
<form action="/urlencoded?firstname=sid&lastname=sloth" method="POST" enctype="application/x-www-form-urlencoded">
    <input type="text" name="username" value="sidthesloth"/>
    <input type="text" name="password" value="slothsecret"/>
    <input type="submit" value="Submit" />
</form>
```

```
POST http://www.example.com HTTP/1.1
Content-Type: application/x-www-form-urlencoded;charset=utf-8

title=test&sub%5B%5D=1&sub%5B%5D=2&sub%5B%5D=3
```
- **Content-Type**被指定为 application/x-www-form-urlencoded
- 提交的数据按照 key1=val1&key2=val2 的方式进行编码  

### node中使用request上传数据
```
var url = 'http://192.168.0.102:3000/home?name=xmg';

request.post({url:url,form:{key:'value'}},function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log('成功上传数据');
    }
})
```

# multipart/form-data
使用表单上传文件时，必须让 \<form> 表单的 enctype 等于 multipart/form-data

```
<form action="/multipart?firstname=sid slayer&lastname=sloth" method="POST" enctype="multipart/form-data">
    <input type="text" name="username" value="sid the sloth"/>
    <input type="text" name="password" value="slothsecret"/>
    <input type="submit" value="Submit" />
</form>
```
```
POST http://www.example.com HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA

------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="text"

title
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png

PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--
```
- Content-Type 里指明了数据是以 multipart/form-data 来编码
> 消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着是内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 --boundary-- 标示结束。

### node中使用request上传数据
```
var url = 'http://192.168.0.102:3000/home'

var formData = {
    //pass a simple key-value pair
    my_field:'my_value',
    //pass data via Buffers
    my_buffer:new Buffer([1,2,3]),
    //pass data via Streams
    my_file:fs.createReadStream(__dirname + '/unicycle.jpg'),
};

request.post({url:url,formData:formData},function (error,response,body){
    if (!error && response.statusCode == 200) {
    }
})
```

# application/json
```
POST http://www.example.com HTTP/1.1 
Content-Type: application/json;charset=utf-8

{"title":"test","sub":[1,2,3]}
```

### node中使用request上传数据
```
var url = 'http://192.168.0.102:3000/home'

request({
    url:url,
    method:"POST",
    json:true,
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(requestData)
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
})
```

# text/xml
```
POST http://www.example.com HTTP/1.1 
Content-Type: text/xml

<?xml version="1.0"?>
<methodCall>
    <methodName>examples.getStateName</methodName>
    <params>
        <param>
            <value><i4>41</i4></value>
        </param>
    </params>
</methodCall>
```