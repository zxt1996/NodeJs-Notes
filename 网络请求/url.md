# URL
处理HTTP请求时url模块使用率超高，因为该模块允许解析URL、生成URL，以及拼接URL。首先来看看一个完整的URL的各组成部分。
![](img/URL.png)
## url.parse——解析url字符串
通过url.parse方法将url字符串转成Url对象
```
url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
```
- urlStr：url字符串
- parseQueryString：参数为true时，query会被解析为JSON格式，否则为普通字符串格式，默认为false；如：
    - 参数为true：query: { userid: 'xiaoqingnian', callback: 'jsonpcallback' }
    - 参数为false：query: 'userid=xiaoqingnian&callback=jsonpcallback'
- slashesDenoteHost：默认为false，当url是 ‘http://’ 或 ‘ftp://’ 等标志的协议前缀打头的，或直接以地址打头，如 ‘127.0.0.1’ 或 ‘localhost’ 时候是没有区别的；当且仅当以2个斜杠打头的时候，比如 ‘//127.0.0.1’ 才有区别。这时候，如果其值为true，则第一个单个 ‘/’ 之前的部分被解析为 ‘host’ 和 ‘hostname’，如 ” host : ‘127.0.0.1’ “，如果为false，包括2个反斜杠在内的所有字符串被解析为pathname。如：
```
> url.parse('//www.foo/bar',true,true)
Url {
  protocol: null,
  slashes: true,
  auth: null,
  host: 'www.foo',
  port: null,
  hostname: 'www.foo',
  hash: null,
  search: '',
  query: {},
  pathname: '/bar',
  path: '/bar',
  href: '//www.foo/bar' }
> url.parse('//www.foo/bar',true,false)
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '',
  query: {},
  pathname: '//www.foo/bar',
  path: '//www.foo/bar',
  href: '//www.foo/bar' }
```
```
const { URL } = require('url');
const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
//或者
const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
  
/* =>
{ protocol: 'https:',
  auth: 'user:pass',
  host: 'sub.host.com:8080',
  port: '8080',
  hostname: 'sub,host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }
*/

```
## url.format——格式化URL对象
可以通过url.format方法将一个解析后的URL对象格式化成url字符串
```
url.format({
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' 
})

结果为：
'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
```
## url.resolve——拼接url字符串
可以通过url.resolve为URL或 href 插入 或 替换原有的标签，接收参数：
from源地址，to需要添加或替换的标签。
```
url.resolve(from, to)

url.resolve('/one/two/three', 'four')
=> '/one/two/four'
url.resolve('http://example.com/', '/one')    
=> 'http://example.com/one'
url.resolve('http://example.com/one', '/two') 
=> 'http://example.com/two'
```