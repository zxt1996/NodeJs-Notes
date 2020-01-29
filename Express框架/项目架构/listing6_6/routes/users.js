var express = require('express');
var router = express.Router();

/* GET users listing. */
//该路由定义了一个回调
//在检测到正确模式的HTTP'GET'请求时将调用该回调
//即收到/users/ URL时使用此路由
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('cool',{title:'cool'});
});

module.exports = router;
