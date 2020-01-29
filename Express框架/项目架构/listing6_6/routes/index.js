var express = require('express');
var router = express.Router();

/* GET home page. */
//req:HTTP请求对象
//res:HTTP响应对象
//next:中间件链中的下一个函数
router.get('/', function(req, res, next) {
  //渲染view中对应的视图模板
  //render使用模板和数据创建并返回 HTML 文件
  res.render('index', { title: 'Express' });
});

module.exports = router;
