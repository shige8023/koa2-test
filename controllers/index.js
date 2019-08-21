/*
 * @Description: 
 * @Author: Rico.刘一飞
 * @Date: 2019-08-20 15:59:40
 * @LastEditors: Rico.刘一飞
 * @LastEditTime: 2019-08-20 16:04:19
 */

const htmlForm = `
    <form action="/login" method="post">
        <p>Name: <input name="name" value="bob"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
`
const htmlTml = `
    <h1>Hello, koa2!</h1>
    <img src="http://photocdn.sohu.com/20120708/Img347586981.jpg">
`;

const fn_hello = async (ctx, next) => {
    let {name} = ctx.params;
    ctx.response.body = `<h1>hello, ${name}</h1>`
}

const fn_index = async (ctx, next) => {
    let {name} = ctx.params;
    ctx.response.body = htmlForm
}

const fn_login = async (ctx) => {
    let {name, password} = ctx.request.body;
    if (name === 'bob' && password === '123456') {
        ctx.response.body = `
            <h2>hello,${name}</h2>
        `
    } else {
        ctx.response.body = `
            <h2>error!</h2>
            <a href="/">重试</a>
        `
    }
}

module.exports = {
    'GET /': fn_index,
    'GET /hello/:name': fn_hello,
    'POST /login': fn_login,
}

