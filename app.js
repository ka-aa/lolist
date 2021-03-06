var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/routes/index');
const apiRouter = require('./server/routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(cookieParser(process.env.SECRET_KEY || 'SECRET_KEY'));
app.use(express.static(path.join(__dirname, '/server/public')));

// app.locals = {
//   publicDir: path.resolve(__dirname, 'public'),
// };

app.use('/api', apiRouter);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// protect the API:
app.disable('x-powered-by');

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
