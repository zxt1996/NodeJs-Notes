var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coolRouter = require('./routes/cool');

var app = express();

// view engine setup
//__dirname表示当前运行的文件所在的目录
//视图引擎设定
//设置'views'以指定模板的存储文件夹
//设置'view engine'以指定模板库
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use()调用中间件
app.use(logger('dev'));
app.use(express.json());
//解析请求主体
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//提供./public下的静态文件
//express.static中间件将项目根目录下所有静态文件托管到/public目录
app.use(express.static(path.join(__dirname, 'public')));

//指定程序路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cool',coolRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
