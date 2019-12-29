# http
> 仅进行流处理和消息解析。 它将消息解析为消息头和消息主体，但不会解析具体的消息头或消息主体。接收到的原始消息头保存在 **rawHeaders**属性中
```
{
    //是一个实体消息首部，用来指明发送给接收方的消息主体的大小
    'content-length':'123',
    'content-type':'text/plain',
    'connection':'keep-alive',
    'host':'mysite.com',
    'accept':'*/*'
}
```