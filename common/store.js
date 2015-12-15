/**
 * Created by Administrator on 2015/11/8.
 */
var qn    = require('./store_qn');
var local = require('./store_local');

module.exports = qn || local;