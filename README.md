<!--
 * @Description: 
 * @Author: Rico.刘一飞
 * @Date: 2019-08-30 15:05:47
 * @LastEditors: Rico.刘一飞
 * @LastEditTime: 2019-08-30 15:22:13
 -->
# node demo

*本项目基于koa2,koa-bodyparser,koa-router,dubbo2.js*

## pm2用法

### 常用命令

- pm2 start 文件  // 启动对应服务
- pm2 show (id) // 查看详细状态信息
- pm2 list // 查看所有启动的进程列表
- pm2 monit // 监控每个 node 进程的 cpu 和内存占用情况
- pm2 logs // 监控所有进程的日志信息
- pm2 web // 监控运行这些进程的机器的状态
- pm2 stop (id | all) // 停止指定进程
- pm2 restart (id | all) // 重启指定|全部进程
- pm2 delete (id | all) // 杀死指定|全部进程

### 配置

`
// 名称任意，按照个人习惯来
module.exports = {
  apps: [
    {
      name: 'kaifazhe', // 应用名称
      script: './build/server.js', // 启动文件地址
      cwd: './', // 当前工作路径
      watch: [
        // 监控变化的目录，一旦变化，自动重启
        'src',
        'build',
      ],
      ignore_watch: [
        // 忽视这些目录的变化
        'node_modules',
        'logs',
        'public',
      ],
      node_args: '--harmony', // node的启动模式
      env: {
        NODE_ENV: 'development', // 设置运行环境，此时process.env.NODE_ENV的值就是development
        ORIGIN_ADDR: 'http://www.yoduao.com'
      },
      env_production: {
        NODE_ENV: 'production',
      },
      out_file: './logs/out.log', // 普通日志路径
      error_file: './logs/err.log', // 错误日志路径
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};

作者：luffyZh
链接：https://juejin.im/post/5be406705188256dbb5176f9
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
`


### 负载均衡

`
# 开启三个进程运行项目
pm2 start app.js -i 3
# 根据机器CPU核数，开启对应数目的进程运行项目
pm2 start app.js -i max
`

> https://juejin.im/post/5be406705188256dbb5176f9