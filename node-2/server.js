const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        // 获取请求路径path
        const pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        // 设定Content-type
        response.writeHead(200, { "Content-Type": "text/plain" });
        // 处理路由并拿到请求返回的数据
        const content = route(handle, pathname);
        // 响应
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

exports.start = start;
