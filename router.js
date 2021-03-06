/*
 * @Description: 
 * @Author: Rico.刘一飞
 * @Date: 2019-08-20 16:09:55
 * @LastEditors: Rico.刘一飞
 * @LastEditTime: 2019-08-30 15:00:10
 */

const fs = require('fs');
const router = require('koa-router')();

// 获取controller里的文件
const files = fs.readdirSync(__dirname +'/controllers');
// 过滤掉非.js结尾的文件
const js_files = files.filter((f) => {
    return f.endsWith('.js')
})

for (let i of js_files) {
    let map = require(__dirname + '/controllers/' + i);
    for (url in map) {
        if (url.startsWith('GET ')) {
            let path = url.substring(4);
            router.get(path, map[url])
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, map[url])
        }
    }
}

module.exports = () => router.routes()