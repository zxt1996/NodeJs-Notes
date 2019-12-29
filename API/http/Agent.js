const http = require('http');
//Agent 负责管理 HTTP 客户端的连接持久性和重用。
//客户端和服务端，对每次交互都要经过”建立-传输-销毁“的过程，为了减少建立/销毁连接的开销，http提供了keep-alive模式，
//即“持久连接”对已经创建的连接可以重复使用
//http.Agent 主要是为 http.request, http.get 提供代理服务的，用于管理 http 连接的创建，销毁及复用工作。

//http.globalAgent是node默认创建的一个Agent实例，对http请求没有指定agent情况下，默认使用这个实例.

const agent = new http.Agent({
    //可以被用于将来的请求而无需重新建立 TCP 连接。
    keepAlive:true,
    //指定用于 TCP Keep-Alive 数据包的初始延迟。
    keepAliveMsecs:1000,
    //每个主机允许的套接字的最大数量。
    maxSockets:4,
    //在空闲状态下保持打开的套接字的最大数量。仅当 keepAlive 被设置为 true 时才相关
    maxFreeSockets:2
})

