/**
 * Created by Administrator on 2015/11/25.
 */
var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

app.use(session({
    secret: config.session_secret,
    store: new RedisStore({
        port: config.redis_port,
        host: config.redis_host,
    }),
    resave: true,
    saveUninitialized: true,
}));

app.use(function (req, res, next) {
    if (!req.session) {
        return next(new Error('oh no')) // handle error
    }
    next() // otherwise continue
})