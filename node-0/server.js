const http = require('http');

/**
 * `response.writeHead()`:设置响应报文头部字段
 * `response.write()`:对页面进行写入操作
 * `response.end()`:结束响应
 */
http.createServer(function (request, response) {
    // 返回文本
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('Hello World!');

    // 返回json
    // response.writeHead(200, { "Content-Type": "application/json;charset=UTF-8" });
    // const data = {
    //     code: 200,
    //     data: {
    //         age: 18,
    //     },
    //     pageDto: null,
    //     msg: '',
    // };
    // response.write(JSON.stringify(data));

    // 返回html
    // ……

    response.end();
}).listen(3000);

console.log('Server has started.');