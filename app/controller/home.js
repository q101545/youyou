'use strict';

const Controller = require('egg').Controller;

var sha1 = require('sha1')
class HomeController extends Controller {
     async index() {
         var obj = this.ctx.query
        //  this.logger.info(obj)
         console.log(obj)
         var token = this.config.token
         timestamp = obj.timestamp
         nonce = obj.nonce
         echostr = obj.echostr
         signature = obj.signature
         str = [token, timestamp, nonce].sort().join('')
         sha = sha1(str)
         if(sha === signature){
             this.ctx.body = echostr + ''
            //  this.logger.info("调用成功")
            console.log("调用成功")
         }
     }
 }

module.exports = HomeController;
