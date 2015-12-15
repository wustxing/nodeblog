/**
 * Created by Administrator on 2015/11/25.
 */
/**
 * Created by Administrator on 2015/10/25.
 */

var config = require('./config');
require('colors');
var path = require('path');
var Loader = require('loader');
var express = require('express');
var session = require('express-session');


var RedisStore = require('connect-redis')(session);
var _ = require('lodash');
var csurf = require('csurf');
var compress = require('compression');
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');


var requestLog = require('./middlewares/request_log');
var renderMiddleware = require('./middlewares/render');
var logger = require('./common/logger');
var helmet = require('helmet');


// 静态文件目录
var staticDir = path.join(__dirname, 'public');


var urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;

var app = express();

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.enable('trust proxy');

// Request logger。请求时间
app.use(requestLog);

if (config.debug) {
    // 渲染时间
    app.use(renderMiddleware.render);
}

// 静态资源
app.use(Loader.less(__dirname));
app.use('/public', express.static(staticDir));


// 通用的中间件
app.use(require('response-time')());
app.use(helmet.frameguard('sameorigin'));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(require('method-override')());
app.use(require('cookie-parser')(config.session_secret));
app.use(compress());



// for debug
// app.get('/err', function (req, res, next) {
//   next(new Error('haha'))
// });

// set static, dynamic helpers
_.extend(app.locals, {
    config: config,
    Loader: Loader
});


_.extend(app.locals, require('./common/render_helper'));
app.use(function (req, res, next) {
    res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
    next();
});


app.use(busboy({
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    }
}));

// routes
//app.use('/api/v1', cors(), apiRouterV1);
app.use('/', function  (req,res,next) {
    console.log(res.locals);
    res.send(res.locals);

});



app.listen(config.port, function () {
    logger.log('NodeClub listening on port', config.port);
    logger.log('God bless love....');
    logger.log('You can debug your app with http://' + config.host + ':' + config.port);
    logger.log('');
});


module.exports = app;
