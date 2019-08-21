/*
 * @Description: 
 * @Author: Rico.刘一飞
 * @Date: 2019-08-19 17:27:09
 * @LastEditors: Rico.刘一飞
 * @LastEditTime: 2019-08-20 16:59:30
 */
const Koa = require('Koa');
// const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./router')
const app = new Koa();
app.use(bodyParser());


app.use(controller());

// 在端口3000监听:
app.listen(3001);
console.log('app started at port 3001...');