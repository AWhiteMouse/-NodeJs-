const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        let postData = '';
        console.log("Request for " + pathname + " received.");

        request.setEncoding('utf8');

        // 这里既可以用addListener也可以用on
        request.addListener('data', function (postDataChunk) {
            postData += postDataChunk;
        });
        request.addListener('end', function () {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

exports.start = start;