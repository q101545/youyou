'use strict';

const Controller = require('egg').Controller;

var sha1 = require('sha1')
class HomeController extends Controller {
     async index() {
         var obj = this.ctx.query
         var token = this.ctx.app.config.wechat_config.token,
         timestamp = obj.timestamp,
         nonce = obj.nonce,
         echostr = obj.echostr,
         signature = obj.signature,
         str = [token, timestamp, nonce].sort().join(''),
         sha = sha1(str);
         if(sha === signature){
             this.ctx.body = echostr + ''
         }
     }
 }

module.exports = HomeController;
