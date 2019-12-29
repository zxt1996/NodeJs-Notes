const axios = require('axios');

//默认情况下，Axios可以解析JSON响应
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    })

//可以通过axios.all发起多个并发请求
axios.all([
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03'),
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
]).then(axios.spread((response1,response2) => {
    //axios.all([]) 返回的结果是一个数组，使用 axios.spread 可将数组 [res1,res2] 展开为 res1, res2
    console.log(response1.data.url);
    console.log(response2.data.url);
})).catch(error => {
    console.log(error);
})

axios.post('https://whatever.com/todos',{
    todo:'Buy the milk'
}).then(res => {
    console.log(`statusCode:${res.statusCode}`);
    console.log(res);
}).catch(error => {
    console.log(error);
})