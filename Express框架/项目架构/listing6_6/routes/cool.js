var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //渲染view中对应的视图模板
  res.send('cool');
});

module.exports = router;