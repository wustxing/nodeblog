/**
 * Created by Administrator on 2015/10/25.
 */
var cache  =  require('./common/cache');
var EventProxy = require('eventproxy');

console.log('ddd');

//var Topic        = require('./proxy').Topic;
//var  eventproxy = require('eventproxy');
//
//function add(a,b)
//{
//    console.log(a+b);
//}
//function sub(a,b)
//{
//    console.log(a-b);
//}
//
//add.call(sub,3,1);

//var path = require('path');
//
//var staticpath = path.join(__dirname,'public');
//var assets = {};
//console.log(typeof assets);
//
//    var _ = require('lodash');
//
//var characters = [
//    { 'name': 'barney',  'age': 36, 'blocked': false },
//    { 'name': 'fred',    'age': 40, 'blocked': true },
//    { 'name': 'pebbles', 'age': 1,  'blocked': false }
//];
//
//var user =  _.find(characters, function(chr) {
//    return chr.age < 50;
//});
//console.log(user);
//// → { 'name': 'barney', 'age': 36, 'blocked': false }
//
//// using "_.where" callback shorthand
//var user1 =  _.find(characters, { 'age': 1 });
//console.log(user1);
//// →  { 'name': 'pebbles', 'age': 1, 'blocked': false }
//
//// using "_.pluck" callback shorthand
//var user2 =  _.find(characters, 'blocked');
//console.log(user2);
// → { 'name': 'fred', 'age': 40, 'blocked': true }

//var uuid        = require('node-uuid');
//var utility     = require('utility');
//console.log(uuid.v1());
//console.log(uuid.v4());
//console.log(utility.md5('000000'));
//console.log(utility.escape('<script/>"& &amp;'));
//console.log(utility.randomString(11, '1234567890'));
////check if object has this property
//console.log(utility.has({hello: 'world'}, 'hell'));
//console.log(utility.logDate());
//console.log(utility.YYYYMMDD());
//console.log(utility.YYYYMMDD(':'));
//
//console.log(utility.split('xiong,xing'));
//
//var util = require('util');
//
//console.log(util.isArray([]));
//// true
//console.log(util.isArray(new Array));
//// true
//console.log(util.isArray({}));
//// false
//console.log(util.format('@%s 的个人主页', 'wustxing'));
//
//console.log(utility.sha1('000001'+'admin'));

